const bcrypt = require('bcrypt');
const createHashid = require('../../../common/create-hashid');
const validatingStatusCodes = require('../../../common/http-response/validating-status-code');

module.exports = ( sequelize, DataTypes ) => {

  const userRegistration = sequelize.define("cadastro_usuarios", {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true,
    },
    hash_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    nome_usuario:{
      type: DataTypes.STRING(165),
      unique: false,
      allowNull: false,
      comment: "Coluna destinado a registrar o nome do usuário que será logado no sistema."
    },
    email_usuario:{
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
      unique: false,
      allowNull: false,
      comment: "Coluna destinado a registrar o e-mail do usuário que será logado no sistema."
    },
    senha_usuario: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Coluna destinado a registrar a senha do usuário que será logado no sistema."
    },
    status_usuario: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      comment: "Coluna destinado a registrar o status do usuário que será logado no sistema."
    },
  },{
    hooks:{
      async beforeCreate(dataUser){
        try {
          const saltRounds = 10;
          const salt = await bcrypt.genSalt(saltRounds);
          const encryptedPassword = await bcrypt.hash(dataUser.senha_usuario, salt);         

          return encryptedPassword
        } catch (error) {
          return validatingStatusCodes(500, error, 'beforeCreate em userRegistration')        
        }
      },
      async beforeBulkUpdate(dataUser){
        try {
          const saltRounds = 10;
          const salt = await bcrypt.genSalt(saltRounds);
          const encryptedPassword = await bcrypt.hash(dataUser.senha_usuario, salt);         

          return encryptedPassword        
        } catch (error) {
          return validatingStatusCodes(500, error, 'beforeBulkUpdate em userRegistration')          
        }
      }
    },
    async afterCreate(dataUser){
      try {
        const hashID = await createHashid(dataUser.id);
        await dataUser.update({
          hash_id: hashID
        },{
          where: {
            id: dataUser.id
          },
        })
        return hashID;
      } catch (error) {
        return validatingStatusCodes(500, error, 'afterCreate em userRegistration')        
      }
    }
  });

  userRegistration.prototype.comparePassword = async(password, hash) => {
    try {
      return bcrypt.compare(password, hash, function(err, result){
        return (err || result)
      })
    } catch (error) {
      return validatingStatusCodes(500, error, 'comparePassword em userRegistration')      
    }
  };

  return userRegistration;
}
const nodemailer = require ('nodemailer');
    const transport = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS
        }
      });

      module.exports = {
        confirmarRegister : async (data) =>{
            const {name, email, token} = data;

            try{
              const infoMail = await transport.sendMail({
                from : 'Project Manager <info@p_manager.com>',
                to : email,
                subject : 'Confirma tu cuenta',
                text : 'Confirma tu cuenta en Projects Manager',
                html : `<p>Hola ${name}, hace click en el siguiente enlace</p>
                <a href="${process.env.URL_FRONTEND}/confirm/${token}">Confirma tu cuenta</a> `
                 

            })
            console.log(infoMail);
          
          }catch(error){
            console.log(error);
          }
        },


        forgotPasword : async (data) =>{
            const {name, email, token} = data;

            try{
            const infoMail = await transport.sendMail({
                from : 'Project Manager <info@p_manager.com>',
                to : email,
                subject : 'Restablecé tu contraseña',
                text : 'Restablecé tu contraseña en Projects Manager',
                html : `<p>Hola ${name}, hacé click en el siguiente enlace</p>
                <a href="${process.env.URL_FRONTEND}/recover-password/${token}">Restablecer contraseña</a>`


            })
            console.log(infoMail);
          
          }catch(error){
            console.log(error);
          }
        }
      }

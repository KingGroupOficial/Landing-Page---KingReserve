const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

exports.sendEmailNotification = functions.firestore
  .document('contactos/{docId}')
  .onCreate((snap) => {
    const newValue = snap.data();

    const mailOptions = {
      from: gmailEmail,
      to: 'maycoljhordan07@gmail.com',
      subject: `Nuevo mensaje de ${newValue.nombre} ${newValue.apellido}`,
      text: `Has recibido un nuevo mensaje de ${newValue.nombre} ${
        newValue.apellido
      } (${newValue.email}):\n\n${newValue.mensaje}`,
    };

    return transporter.sendMail(mailOptions)
      .then(() => {
        console.log('¡Email enviado con éxito!');
      })
      .catch((error) => {
        console.error('Error enviando el email:', error);
      });
  });
import React from "react";
import { ContainerPrivacyPolicy } from "./StylePolicy";
import { GetDate } from "../Languages/EN";

export const UserPolicy = () => {
  var idioma = navigator.language || navigator.userLanguage;

  const TextEN = {
    1: "Terms of Use",
    2: "Last Updated: 16/01/2024",
    3: "1. App Usage and Content",
    4: "1.1 By using our app, you agree to comply with all applicable laws and regulations.",
    5: "1.2 Our app connects to an API to provide specific functionalities. By using the app, you consent that certain data, such as course information and progress, may be shared with the API to enhance the user experience.",
    7: "1.3 The app offers three levels of courses: Basic (free), Intermediate (one-time payment of $3), and Advanced (through monthly subscription). When accessing paid courses, you agree to make the corresponding payment and acknowledge that free courses may be subject to changes in the future.",
    8: "2. In-App Purchases",
    9: "2.1 The app may offer in-app purchases to access premium content. By making an in-app purchase, you confirm that you are the authorized account holder associated with the payment method used",
    10: "2.2 In-app purchases are final and non-refundable unless otherwise specified in our refund policy.",
    11: "3. Subscription Cancellation",
    12: "3.1 Subscriptions to advanced courses renew automatically unless canceled. You can cancel your subscription at any time, but there will be no refund for unused time.",
    13: "3.2 Cancelling the subscription will prevent future automatic charges but will not generate a refund for charges already processed.",
    14: "4. Privacy Policy",
    15: "4.1 We respect your privacy. Please refer to our Privacy Policy for detailed information on how we collect, use, and protect your personal information.",
    16: "5. Changes to the Terms of Use",
    17: "5.1 We reserve the right to modify these Terms of Use at any time. We will notify you of any changes through an in-app notification or other means before the changes take effect.",
    18: "By using our app, you agree to these terms. If you do not agree with these terms, we recommend discontinuing the use of the application.",
    19: "Thank you for choosing OUR APPS!",
    20: "Sincerely",
  };

  const TextES = {
    1: "Términos de Usuario",
    2: "Fecha de última actualización: 16/01/2024",
    3: "Bienvenido usuario Al utilizar nuestra aplicación, aceptas los siguientes términos y condiciones. Por favor, léelos detenidamente antes de utilizar la aplicación.",
    4: "1. Uso de la Aplicación y Contenido",
    5: "1.1 Al utilizar nuestra aplicación, aceptas cumplir con todas las leyes y regulaciones aplicables.",
    6: "1.2 Nuestra aplicación se conecta con una API para proporcionar funcionalidades específicas. Al utilizar la aplicación, consientes que ciertos datos, como información de curso y progreso, podrían ser compartidos con la API para mejorar la experiencia del usuario.",
    7: "1.3 La aplicación ofrece tres niveles de cursos: Básico (gratuito), Intermedio (pago único de 3 dólares) y Avanzado (mediante suscripción mensual). Al acceder a cursos de pago, aceptas realizar el pago correspondiente y reconoces que los cursos gratuitos pueden estar sujetos a cambios en el futuro.",
    8: "2. Compras Integradas",
    9: "2.1 La aplicación puede ofrecer compras integradas para acceder a contenido premium. Al realizar una compra integrada, confirmas que eres el titular autorizado de la cuenta asociada con el método de pago utilizado.",
    10: "2.2 Las compras integradas son finales y no reembolsables, a menos que se especifique lo contrario en nuestra política de reembolsos.",
    11: "3. Cancelación de Suscripciones",
    12: "3.1 Las suscripciones a cursos avanzados son renovables automáticamente a menos que se cancelen. Puedes cancelar tu suscripción en cualquier momento, pero no habrá reembolso por el tiempo no utilizado.",
    13: "3.2 La cancelación de la suscripción evitará futuros cargos automáticos, pero no generará un reembolso de los cargos ya procesados.",
    14: "4. Política de Privacidad",
    15: "4.1 Respetamos tu privacidad. Consulta nuestra Política de Privacidad para obtener información detallada sobre cómo recopilamos, utilizamos y protegemos tu información personal.",
    16: "5. Cambios en los Términos de Usuario",
    17: "5.1 Nos reservamos el derecho de modificar estos Términos de Usuario en cualquier momento. Te notificaremos sobre cualquier cambio mediante una notificación en la aplicación o por otros medios antes de que los cambios entren en vigencia.",
    18: "Al utilizar nuestra aplicación, aceptas estos términos. Si no estás de acuerdo con estos términos, te recomendamos que dejes de utilizar la aplicación.",
    19: "¡Gracias por elegir Nuestras Aplicaciones!",
    20: "Atentamente",
  };

  return (
    <ContainerPrivacyPolicy>
      <h3>{idioma === "en-US" ? TextEN[1] : TextES[1]}</h3>

      <p>{idioma === "en-US" ? TextEN[2] : TextES[2]} </p>

      <p>{idioma === "en-US" ? TextEN[3] : TextES[3]}</p>
      <p>{idioma === "en-US" ? TextEN[4] : TextES[4]}</p>
      <p>{idioma === "en-US" ? TextEN[5] : TextES[5]}</p>
      <p>{idioma === "en-US" ? TextEN[6] : TextES[6]}</p>
      <p>{idioma === "en-US" ? TextEN[7] : TextES[7]}</p>

      <h3> {idioma === "en-US" ? TextEN[8] : TextES[8]}</h3>
      <p>{idioma === "en-US" ? TextEN[9] : TextES[9]}</p>
      <p>{idioma === "en-US" ? TextEN[10] : TextES[10]}</p>

      <h3>{idioma === "en-US" ? TextEN[11] : TextES[11]}</h3>
      <p>{idioma === "en-US" ? TextEN[12] : TextES[12]}</p>
      <p>{idioma === "en-US" ? TextEN[13] : TextES[13]}</p>

      <h3>{idioma === "en-US" ? TextEN[14] : TextES[14]}</h3>
      <p>{idioma === "en-US" ? TextEN[15] : TextES[15]}</p>

      <h3>{idioma === "en-US" ? TextEN[16] : TextES[16]}</h3>
      <p>{idioma === "en-US" ? TextEN[17] : TextES[17]}</p>

      <h3>{idioma === "en-US" ? TextEN[24] : TextES[24]}</h3>
      <p>{idioma === "en-US" ? TextEN[25] : TextES[25]}</p>

      <p>{idioma === "en-US" ? TextEN[18] : TextES[18]}</p>
      <p>{idioma === "en-US" ? TextEN[19] : TextES[19]}</p>
      <p>{idioma === "en-US" ? TextEN[20] : TextES[20]}</p>

      <h3>{idioma === "en-US" ? TextEN[26] : TextES[26]}</h3>
      <p>{idioma === "en-US" ? TextEN[27] : TextES[27]}</p>

      <h3>{idioma === "en-US" ? TextEN[28] : TextES[28]}</h3>
      <p>{idioma === "en-US" ? TextEN[29] : TextES[29]}</p>

      <h3>{idioma === "en-US" ? TextEN[30] : TextES[30]}</h3>
      <p>{idioma === "en-US" ? TextEN[31] : TextES[31]}</p>

      <h3>{idioma === "en-US" ? TextEN[32] : TextES[32]}</h3>
      <p>{idioma === "en-US" ? TextEN[33] : TextES[33]}</p>

      <h3>{idioma === "en-US" ? TextEN[34] : TextES[34]}</h3>
      <p>{idioma === "en-US" ? TextEN[35] : TextES[35]}</p>

      <h3>{idioma === "en-US" ? TextEN[36] : TextES[36]}</h3>
      <p>{idioma === "en-US" ? TextEN[37] : TextES[37]}</p>

      <h3>{idioma === "en-US" ? TextEN[38] : TextES[38]}</h3>

      <h3>Between Byte Software {GetDate()} </h3>
    </ContainerPrivacyPolicy>
  );
};

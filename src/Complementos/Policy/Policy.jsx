import React from 'react'
<<<<<<< HEAD
import { ContainerPrivacyPolicy, ContainerRight } from './StylePolicy'
=======
import { ContainerPrivacyPolicy } from './StylePolicy'
>>>>>>> 8343f091e279af75457c2b7d7ae6adb598c675ad
import { GetDate } from '../Languages/EN'

export const Policy = () =>
{
  var idioma = navigator.language || navigator.userLanguage;

  const TextEN = {
    1: 'Privacy Policy',
    2: '1. General information',
<<<<<<< HEAD
    3: 'Welcome to Between Byte Software, our applications are designed to be appropriate for children and all ages. In OUR APPS, we value the privacy and security of our users. This privacy policy explains how we collect, use, protect and share the personal and advertising information, including rewarded video ads, of our app users.',
=======
    3: 'Welcome to JL Software, our applications are designed to be appropriate for children and all ages. In OUR APPS, we value the privacy and security of our users. This privacy policy explains how we collect, use, protect and share the personal and advertising information, including rewarded video ads, of our app users.',
>>>>>>> 8343f091e279af75457c2b7d7ae6adb598c675ad
    4: '2. Information we collect',
    5: 'Personal Information: We do not collect personally identifiable information from users, especially those under the age of 13, without verifiable parental or legal guardian consent.',
    6: 'Ad Information (AdMob): OUR APPS contains rewarded video ads from AdMob, a third-party advertising platform. AdMob collects non-personal information related to advertising, such as ad view statistics, ad interactions, and ad preferences. This information is used to improve the relevance of ads and is not used to identify individual users.',
    7: '3. Parental Consent',
    8: 'If a user is under the age of 13, we will request verifiable parental or legal guardian consent before collecting any personal or ad information, including rewarded video ad interactions. Parents or guardians may review the information collected and request its deletion at any time. For more information on how to provide consent, parents or guardians may contact us via our email',
    9: '4. Use of Information',
    10: 'The information collected is used to:',
    11: 'Personalize the in-app experience.',
    12: 'Improve and optimize the app.',
    13: 'Understand user behavior within the app.',
    14: 'In the case of ad information, improve the relevance of displayed rewarded video ads and reward management.',
    15: '5. Sharing Information',
    16: 'We do not share personal information from users under the age of 13 with third parties without verifiable parental or guardian consent. However, ad information may be shared with AdMob and its advertising partners to provide relevant rewarded video ads.',
    17: '6. Special Features',
    18: 'Access to Special Features Button: Within OUR APPS, we have included a button or link that allows you to access additional features of the app.',
    19: 'Automatic Features: Within OUR APPS, we have implemented features that operate automatically or in the background, without user intervention. Examples of these functions include:',
    20: 'Automatic content updates.',
    21: 'Cloud data synchronization.',
    22: 'Analysis or statistics processes that improve the application.',
    23: 'All these automatic functions are designed to optimize your experience in the application and offer you a more efficient service.',
    24: '7. Registration and Storage of Login Information',
    25: 'In case of offering registration or login functions in our application, we want to clarify that we only use the data provided to allow access to the application. We store this information in cookies or in our database, and passwords are stored encrypted to guarantee the security of the data.',
    26: '8. Information Security',
    27: 'We take reasonable measures to protect the information collected, including the necessary physical, electronic and procedural security measures to ensure the confidentiality and security of the information.',
    28: '9. Changes to the Privacy Policy',
    29: 'We reserve the right to make changes to this privacy policy. Any major changes will be notified to users through an update in the app store and on our website.',
    30: '10. Questions and Contact',
    31: 'If you have any questions about this privacy policy or wish to exercise your privacy rights, you can contact us at scholar.dev@gmail.com',
    32: '11. Consent',
    33: 'By using OUR APPS, you accept this privacy policy. If you do not agree with this policy, please do not use our application.',
    34: '12. Links to Third Parties',
    35: 'Our application may contain links to other sites that may be of interest to you. Once you click on these links and leave our application, we no longer have control over the site to which you are redirected and, therefore, we are not responsible for the terms or privacy or the protection of your data on those other third-party sites. Such sites are subject to their own privacy policies, so it is advisable to consult them to confirm that you agree with these.',
    36: '13. AdMob Advertising in our Application',
    37: 'We want to clarify that we have no control over the ads that appear in our application, such as banner, interstitial or rewarded video ads. These ads are managed by third parties, however, we work diligently to ensure that they are relevant and respectful of the user experience.',
    38: 'Sincerely',
<<<<<<< HEAD
    39: 'All Rights Reserved 2022'
=======
>>>>>>> 8343f091e279af75457c2b7d7ae6adb598c675ad
  }

  const TextES = {
    1: 'Política de Privacidad',
    2: '1. Información General',
<<<<<<< HEAD
    3: '¡Bienvenido/a Between Byte Software nuestras aplicaciónes estan diseñada para ser apropiada para niños y todas las edades! En NUESTRAS APPS, valoramos la privacidad y la seguridad de nuestros usuarios. Esta política de privacidad explica cómo recopilamos, utilizamos, protegemos y compartimos la información personal y de anuncios, incluyendo anuncios de video recompensados, de los usuarios de nuestra aplicación.',
=======
    3: '¡Bienvenido/a JL Software nuestras aplicaciónes estan diseñada para ser apropiada para niños y todas las edades! En NUESTRAS APPS, valoramos la privacidad y la seguridad de nuestros usuarios. Esta política de privacidad explica cómo recopilamos, utilizamos, protegemos y compartimos la información personal y de anuncios, incluyendo anuncios de video recompensados, de los usuarios de nuestra aplicación.',
>>>>>>> 8343f091e279af75457c2b7d7ae6adb598c675ad
    4: '2. Información que Recopilamos',
    5: 'Información Personal: No recopilamos información personal identificable de los usuarios, especialmente de aquellos que son menores de 13 años, sin el consentimiento verificable de los padres o tutores legales.',
    6: 'Información de Anuncios (AdMob): NUESTRAS APPS contiene anuncios de video recompensados de AdMob, una plataforma de publicidad de terceros. AdMob recopila información no personal relacionada con la publicidad, como estadísticas de visualización de anuncios, interacciones con anuncios y preferencias publicitarias. Esta información se utiliza para mejorar la relevancia de los anuncios y no se utiliza para identificar a usuarios individuales.',
    7: '3. Consentimiento de los Padres',
    8: 'Si un usuario es menor de 13 años, solicitaremos el consentimiento verificable de los padres o tutores legales antes de recopilar cualquier información personal o de anuncios, incluyendo la interacción con anuncios de video recompensados. Los padres o tutores pueden revisar la información recopilada y solicitar su eliminación en cualquier momento. Para obtener más información sobre cómo proporcionar el consentimiento, los padres o tutores pueden comunicarse con nosotros a través de nuestro correo electrónico erudito.dev@gmail.com',
    9: '4. Uso de la Información',
    10: 'La información recopilada se utiliza para:',
    11: 'Personalizar la experiencia en la aplicación.',
    12: 'Mejorar y optimizar la aplicación.',
    13: 'Comprender el comportamiento de los usuarios dentro de la aplicación.',
    14: 'En el caso de la información de anuncios, mejorar la relevancia de los anuncios de video recompensados mostrados y la gestión de recompensas.',
    15: '5. Compartir Información',
    16: 'No compartimos información personal de usuarios menores de 13 años con terceros sin el consentimiento verificable de los padres o tutores. Sin embargo, la información de anuncios puede ser compartida con AdMob y sus socios publicitarios para proporcionar anuncios de video recompensados relevantes.',
    17: '6. Funciones Especiales',
    18: 'Botón de Acceso a Funcionalidades Especiales: Dentro de NUESTRAS APPS, hemos incluido un botón o enlace que te permite acceder a características adicionales de la aplicación.',
    19: 'Funciones Automáticas: Dentro de NUESTRAS APPS, hemos implementado funciones que operan de forma automática o en segundo plano, sin necesidad de intervención por parte del usuario. Ejemplos de estas funciones incluyen:',
    20: 'Actualizaciones automáticas de contenido.',
    21: 'Sincronización de datos en la nube.',
    22: 'Procesos de análisis o estadísticas que mejoran la aplicación.',
    23: 'Todas estas funciones automáticas están diseñadas para optimizar tu experiencia en la aplicación y ofrecerte un servicio más eficiente.',
    24: '7. Registro y Almacenamiento de Información de Inicio de Sesión',
    25: 'En caso de ofrecer funciones de registro o inicio de sesión en nuestra aplicación, queremos aclarar que solo usamos los datos proporcionados para permitir el acceso a la aplicación. Almacenamos esta información en cookies o en nuestra base de datos, y las contraseñas se almacenan de forma encriptada para garantizar la seguridad de los datos.',
    26: '8. Seguridad de la Información',
    27: 'Tomamos medidas razonables para proteger la información recopilada, incluyendo las medidas de seguridad físicas, electrónicas y de procedimiento necesarias para garantizar la confidencialidad y seguridad de la información.',
    28: '9. Cambios en la Política de Privacidad',
    29: 'Nos reservamos el derecho de realizar cambios en esta política de privacidad. Cualquier cambio importante se notificará a los usuarios a través de una actualización en la tienda de aplicaciones y en nuestro sitio web.',
    30: '10. Preguntas y Contacto',
    31: 'Si tienes alguna pregunta sobre esta política de privacidad o deseas ejercer tus derechos de privacidad, puedes contactarnos en erudito.dev@gmail.com',
    32: '11. Consentimiento',
    33: 'Al utilizar NUESTRAS APPS, aceptas esta política de privacidad. Si no estás de acuerdo con esta política, por favor, no utilices nuestra aplicación.',
    34: '12. Enlaces a Terceros',
    35: 'Nuestra aplicación podría contener enlaces a otros sitios que pudieran ser de tu interés. Una vez que hagas click en estos enlaces y abandones nuestra aplicación, ya no tenemos control sobre el sitio al que te redirigen y, por lo tanto, no somos responsables de los términos o privacidad ni de la protección de tus datos en esos otros sitios de terceros. Dichos sitios están sujetos a sus propias políticas de privacidad, por lo cual es recomendable que los consultes para confirmar que estás de acuerdo con estas.',
    36: '13. Publicidad de AdMob en nuestra Aplicación',
    37: 'Queremos aclarar que no tenemos control sobre los anuncios que aparecen en nuestra aplicación, como los anuncios de banner, intersticiales o videos recompensados. Estos anuncios son gestionados por terceros, sin embargo, trabajamos diligentemente para garantizar que sean relevantes y respetuosos con la experiencia del usuario.',
    38: 'Atentamente',
<<<<<<< HEAD
    39: `Todos Los Derechos Reservados 2022`
=======
>>>>>>> 8343f091e279af75457c2b7d7ae6adb598c675ad
  }

  return (
    <ContainerPrivacyPolicy >

      <h3>{idioma === "en-US" ? TextEN[1] : TextES[1]}</h3>

      <h3>{idioma === "en-US" ? TextEN[2] : TextES[2]} </h3>
      <p>{idioma === "en-US" ? TextEN[3] : TextES[3]}</p>

      <h3>{idioma === "en-US" ? TextEN[4] : TextES[4]}</h3>
      <ul>
        <li>{idioma === "en-US" ? TextEN[5] : TextES[5]}</li>
        <li>{idioma === "en-US" ? TextEN[6] : TextES[6]}</li>
      </ul>


      <h3>{idioma === "en-US" ? TextEN[7] : TextES[7]}</h3>
      <p> {idioma === "en-US" ? TextEN[8] : TextES[8]}</p>


      <h3>{idioma === "en-US" ? TextEN[9] : TextES[9]}</h3>
      <p>{idioma === "en-US" ? TextEN[10] : TextES[10]}</p>
      <ul>
        <li>{idioma === "en-US" ? TextEN[11] : TextES[11]}</li>
        <li>{idioma === "en-US" ? TextEN[12] : TextES[12]}</li>
        <li>{idioma === "en-US" ? TextEN[13] : TextES[13]}</li>
        <li>{idioma === "en-US" ? TextEN[14] : TextES[14]}</li>
      </ul>


      <h3>{idioma === "en-US" ? TextEN[15] : TextES[15]}</h3>
      <p>{idioma === "en-US" ? TextEN[16] : TextES[16]}</p>


      <h3>{idioma === "en-US" ? TextEN[17] : TextES[17]}</h3>
      <ul>
        <li>{idioma === "en-US" ? TextEN[18] : TextES[18]}</li>
        <li>{idioma === "en-US" ? TextEN[19] : TextES[19]}</li>
        <li>{idioma === "en-US" ? TextEN[20] : TextES[20]}</li>
        <li>{idioma === "en-US" ? TextEN[21] : TextES[21]}</li>
        <li>{idioma === "en-US" ? TextEN[22] : TextES[22]}</li>
        <li>{idioma === "en-US" ? TextEN[23] : TextES[23]}</li>
      </ul>


      <h3>{idioma === "en-US" ? TextEN[24] : TextES[24]}</h3>
      <p>{idioma === "en-US" ? TextEN[25] : TextES[25]}</p>


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

<<<<<<< HEAD
      <h3>Between Byte Software</h3>


      <ContainerRight>
        <h3>{idioma === "en-US" ? `${TextEN[39]} - ${GetDate()}` : `${TextES[39]} - ${GetDate()}`}</h3>
      </ContainerRight>

=======
      <h3>JL Software {GetDate()} </h3>
>>>>>>> 8343f091e279af75457c2b7d7ae6adb598c675ad

    </ContainerPrivacyPolicy>
  )
}


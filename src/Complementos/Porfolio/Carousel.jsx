// import React from "react";
// import { Skills } from "../Home/Skills";
// import { Liks } from "../Home/styles/Styles";
// import { PostProyects } from "./PostPorfolio";
// import {
//   AplicacionesPorfolio,
//   ButtonProfolio,
//   ContendorBodyProfolio,
//   ContendorTecnologias,
//   ContenedorNombreImagenProfolio,
//   ContenedorPrincipalCardPorfolio,
  
//   ImgGitPorfolio,
//   ImgPorfolio,
//   TecnologiasProfolio,
//   TituloPorfolio2,
// } from "./Styles/Styles";
// import {
//   ContenedorCarouseles,
//   ContenedorPrincipalCarousel,
// } from "./Styles/StylesCarousel";

// export const Carousel = () => {
//   return (
//     <>
//       <div
//         id="carouselExampleControls"
//         class="carousel slide"
//         data-bs-ride="carousel"
//         style={{margin: "auto", display: "grid", alignContent: "center", justifyContent: "center", }}
//       >
//         <ContenedorCarouseles class="carousel-inner">
//           <div class="carousel-item active">
//             <ContenedorPrincipalCardPorfolio>
              
//                 <ContenedorNombreImagenProfolio>
//                   <TituloPorfolio2>
//                     {PostProyects.name.apicovid.title}
//                   </TituloPorfolio2>
//                   <Liks
//                     href={PostProyects.name.apicovid.repro}
//                     target="_blanck"
//                   >
//                     <ImgGitPorfolio src={Skills.github} alt="github" />
//                   </Liks>
//                 </ContenedorNombreImagenProfolio>
//                 <ContendorBodyProfolio>
//                   <Liks href={PostProyects.name.apicovid.url} target="_blanck">
//                     <ImgPorfolio
//                       src={PostProyects.name.apicovid.pic}
//                       alt="proyect"
//                     />
//                   </Liks>

//                   <ContendorTecnologias>
//                     <ButtonProfolio>
//                       <Liks
//                         href={PostProyects.name.apicovid.url}
//                         target="_blanck"
//                       >
//                         Go to Proyect
//                       </Liks>
//                     </ButtonProfolio>
//                     <AplicacionesPorfolio>
//                       <TecnologiasProfolio src={Skills.react} alt="app1" />
//                       <TecnologiasProfolio src={Skills.css} alt="app1" />
//                       <TecnologiasProfolio src={Skills.bootstrap} alt="app1" />
//                     </AplicacionesPorfolio>
//                   </ContendorTecnologias>
//                 </ContendorBodyProfolio>
//               </CardPorfolio>
//             </ContenedorPrincipalCardPorfolio>
//           </div>
//           <div class="carousel-item">
//             <ContenedorPrincipalCardPorfolio>
//               <CardPorfolio>
//                 <ContenedorNombreImagenProfolio>
//                   <TituloPorfolio2>
//                     {PostProyects.name.relojjs.title}
//                   </TituloPorfolio2>
//                   <Liks href={PostProyects.name.relojjs.repro} target="_blanck">
//                     <ImgGitPorfolio src={Skills.github} alt="github" />
//                   </Liks>
//                 </ContenedorNombreImagenProfolio>
//                 <ContendorBodyProfolio>
//                   <Liks href={PostProyects.name.relojjs.url} target="_blanck">
//                     <ImgPorfolio
//                       src={PostProyects.name.relojjs.pic}
//                       alt="proyect"
//                     />
//                   </Liks>

//                   <ContendorTecnologias>
//                     <ButtonProfolio>
//                       <Liks
//                         href={PostProyects.name.relojjs.url}
//                         target="_blanck"
//                       >
//                         Go to Proyect
//                       </Liks>
//                     </ButtonProfolio>
//                     <AplicacionesPorfolio>
//                       <TecnologiasProfolio src={Skills.react} alt="app1" />
//                       <TecnologiasProfolio src={Skills.css} alt="app1" />
//                       <TecnologiasProfolio src={Skills.bootstrap} alt="app1" />
//                     </AplicacionesPorfolio>
//                   </ContendorTecnologias>
//                 </ContendorBodyProfolio>
//               </CardPorfolio>
//             </ContenedorPrincipalCardPorfolio>
//           </div>

//           <div class="carousel-item">
//             <ContenedorPrincipalCardPorfolio>
//               <CardPorfolio>
//                 <ContenedorNombreImagenProfolio>
//                   <TituloPorfolio2>
//                     {PostProyects.name.mypage.title}
//                   </TituloPorfolio2>
//                   <Liks href={PostProyects.name.mypage.repro} target="_blanck">
//                     <ImgGitPorfolio src={Skills.github} alt="github" />
//                   </Liks>
//                 </ContenedorNombreImagenProfolio>
//                 <ContendorBodyProfolio>
//                   <Liks href={PostProyects.name.mypage.url} target="_blanck">
//                     <ImgPorfolio
//                       src={PostProyects.name.mypage.url}
//                       alt="proyect"
//                     />
//                   </Liks>

//                   <ContendorTecnologias>
//                     <ButtonProfolio>
//                       <Liks
//                         href={PostProyects.name.mypage.url}
//                         target="_blanck"
//                       >
//                         Go to Proyect
//                       </Liks>
//                     </ButtonProfolio>
//                     <AplicacionesPorfolio>
//                       <TecnologiasProfolio src={Skills.react} alt="app1" />
//                       <TecnologiasProfolio src={Skills.css} alt="app1" />
//                       <TecnologiasProfolio src={Skills.bootstrap} alt="app1" />
//                     </AplicacionesPorfolio>
//                   </ContendorTecnologias>
//                 </ContendorBodyProfolio>
//               </CardPorfolio>
//             </ContenedorPrincipalCardPorfolio>
//           </div>
//         </ContenedorCarouseles>

//         <button
//           class="carousel-control-prev"
//           type="button"
//           data-bs-target="#carouselExampleControls"
//           data-bs-slide="prev"
//         >
//           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span class="visually-hidden">Previous</span>

//         </button>
//         <button
//           class="carousel-control-next"
//           type="button"
//           data-bs-target="#carouselExampleControls"
//           data-bs-slide="next"
//         >
//           <span class="carousel-control-next-icon" aria-hidden="true"></span>
//           <span class="visually-hidden">Next</span>
//         </button>
//       </div>
//     </>
//   );
// };

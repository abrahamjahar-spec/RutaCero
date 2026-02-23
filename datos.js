const carbonData = {
  // Paises con carbono positivos
  'United States of America': { 
    status: 'POSITIVO', 
    color: '#ff3333', 
    descHover: 'Alta emisión industrial.', // Para el cuadrito al pasar el mouse
    descGeneral: 'Estados Unidos es uno de los mayores emisores históricos debido a su alta industrialización, dependencia del automóvil y consumo energético per cápita.', // Para la caja 1
    prediccion: 'Si no se reducen drásticamente las emisiones, se enfrentarán a sequías más extremas, huracanes devastadores y pérdida de costas.', // Para la caja 3
    medidas: 'Están implementando leyes masivas para subsidiar la energía solar, eólica y la adopción de vehículos eléctricos.', // Para la caja 4
    imgDefecto: 'https://elordenmundial.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2017/01/7I0fP5W-1024x640.jpg.webp',
    imgCatastrofe: 'https://www.lavanguardia.com/files/article_main_microformat/uploads/2020/01/22/5fa903701cf8a.jpeg',
    imgEcologia: 'https://cdn.elperiodicodelaenergia.com/2024/08/66c76ac1d6403065673820d1.jpg'
  },
    'China': {
    status: 'POSITIVO',
    color: '#ff3333',
    descHover: 'Mayor emisor global de CO₂.',
    descGeneral: 'China es el mayor emisor de CO₂ del mundo debido a su enorme sector industrial y dependencia histórica del carbón, aunque lidera inversiones en energías renovables.',
    prediccion: 'Si no acelera la transición energética, seguirá siendo el principal contribuyente al aumento global de emisiones.',
    medidas: 'Expansión masiva de energía solar y eólica y meta de neutralidad de carbono para 2060.',
    imgDefecto: 'https://images.unsplash.com/photo-1683712988284-eba2c588c0eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q2hpbmElMjAlRjAlOUYlODclQTglRjAlOUYlODclQjN8ZW58MHx8MHx8fDA%3D',
    imgCatastrofe: 'https://www.laizquierdadiario.com/IMG/arton29544.jpg',
    imgEcologia: 'https://i.blogs.es/2c8924/aschina-paneles-solares/1200_800.jpeg'
  },
    'Russia': {
    status: 'POSITIVO',
    color: '#ff3333',
    descHover: 'Gran emisor por combustibles fósiles.',
    descGeneral: 'Rusia depende fuertemente del gas y petróleo, lo que mantiene sus emisiones elevadas pese a su gran cobertura forestal.',
    prediccion: 'Sin cambios estructurales, las emisiones se mantendrán altas por su economía energética.',
    medidas: 'Programas limitados de eficiencia energética y compromisos climáticos moderados.',
    imgCatastrofe: 'https://ceipaz.org/wp-content/uploads/2021/01/foto-bosque.jpg',
    imgEcologia: 'https://mf.b37mrtl.ru/rbthmedia/images/2020.11/article/5fbf46f985600a1d0a3ca818.jpg'
  },
  'United Kingdom': {
    status: 'NEUTRAL',
    color: '#ffcc00',
    descHover: 'Emisiones en fuerte descenso.',
    descGeneral: 'El Reino Unido ha reducido significativamente sus emisiones desde 1990 gracias al abandono del carbón y expansión de renovables.',
    prediccion: 'Podría alcanzar la neutralidad si mantiene el ritmo de descarbonización.',
    medidas: 'Meta legal de cero emisiones netas para 2050 y expansión de energía eólica marina.',
    imgDefecto: 'https://www.ecoportal.net/wp-content/uploads/2019/06/emisiones-de-carbono.jpg',
    imgCatastrofe: 'https://www.ecoportal.net/wp-content/uploads/2019/06/emisiones-de-carbono.jpg',
    imgEcologia: 'https://static.tvn-2.com/clip/adb43eb3-b956-42f1-96cc-efb556d3cca1_16-9-aspect-ratio_default_0.webp'
  },

  'France': {
    status: 'NEUTRAL',
    color: '#ffcc00',
    descHover: 'Bajas emisiones por energía nuclear.',
    descGeneral: 'Francia mantiene emisiones relativamente bajas en Europa debido a su alta dependencia de la energía nuclear.',
    prediccion: 'Se mantendría cerca de la neutralidad si conserva su matriz baja en carbono.',
    medidas: 'Políticas de transición energética y mantenimiento del parque nuclear.',
    imgDefecto: 'https://fotografias.lasexta.com/clipping/cmsimages02/2022/11/30/32369DA7-1240-4E22-ACCA-06B1F698343C/baguette-francesa-declarada-patrimonio-inmaterial-unesco_104.jpg?',
    imgCatastrofe: 'https://s.france24.com/media/display/81151f42-9c1c-11e9-bef3-005056a98db9/francia_pollution.jpg',
    imgEcologia: 'https://i.blogs.es/9f3b08/edf-ap2/500_333.jpeg'
  },

  'Germany': {
    status: 'POSITIVO',
    color: '#ff3333',
    descHover: 'Alta emisión industrial en transición.',
    descGeneral: 'Alemania es un gran emisor europeo por su industria, aunque está en plena transición energética (Energiewende).',
    prediccion: 'Las emisiones bajarán, pero seguirán siendo significativas sin acelerar la descarbonización.',
    medidas: 'Expansión renovable y eliminación progresiva del carbón.',
    imgDefecto: 'https://cypes.grupoeurohispana.com/img/articulos_facebook/ALEMANIA.jpg',
    imgCatastrofe: 'https://totalnewsagency.com/wp-content/uploads/2021/08/alemania-propuso-formar-una-alianza-internacional-contra-el-cambio-climatico-1.jpg',
    imgEcologia: 'https://www.gob.mx/cms/uploads/article/main_image/141306/Energiewende.jpg'
  },

  'Brazil': {
    status: 'POSITIVO',
    color: '#ff3333',
    descHover: 'Emisiones ligadas a deforestación.',
    descGeneral: 'Brasil tiene emisiones moderadas energéticas, pero la deforestación del Amazonas eleva su impacto climático.',
    prediccion: 'Podría empeorar si continúa la deforestación.',
    medidas: 'Programas de control de deforestación y expansión de energías limpias.',
    imgDefecto: 'https://humanidades.com/wp-content/uploads/2017/04/brasil-1-e1566159470787.jpg',
    imgCatastrofe: 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2009/11/13/1258072302203/Deforestation-in-Novo--Pr-001.jpg?width=465&dpr=1&s=none&crop=none',
    imgEcologia: 'https://images.fastcompany.com/image/upload/f_webp,q_auto,c_fit,w_1024,h_1024/wp-cms/uploads/2017/10/7-heres-a-look-behind-the-largest-tropica-reforestation-projec.jpg'
  },

  'Saudi Arabia': {
    status: 'POSITIVO',
    color: '#ff3333',
    descHover: 'Alta huella por petróleo.',
    descGeneral: 'Economía altamente dependiente del petróleo con una de las mayores emisiones per cápita.',
    prediccion: 'Seguirá siendo alta sin diversificación energética.',
    medidas: 'Planes de energía solar dentro de Vision 2030.',
    imgDefecto: 'https://res.cloudinary.com/ddjuftfy2/image/upload/f_webp,c_fill,q_auto,w_500/memphis/xlarge/7021af02a45444fb0dd65aae34f21fe8.jpg',
    imgCatastrofe: 'https://greentology.life/wp-content/uploads/2021/03/19072021_Arabia-Saudita-presenta-plan-verde-para-reducir-emisiones.png',
    imgEcologia: 'https://s03.s3c.es/imag/_v0/665x400/9/d/3/panel-solar-arabia.jpg',
  },

  'Bhutan': {
    status: 'NEGATIVO',
    color: '#00cc66',
    descHover: 'País carbono negativo.',
    descGeneral: 'Bhutan absorbe más CO₂ del que emite gracias a su extensa cobertura forestal y uso de energía hidroeléctrica.',
    prediccion: 'Probablemente se mantenga carbono negativo si conserva sus bosques.',
    medidas: 'Constitución exige mantener al menos 60% del territorio forestado.',
    imgDefecto: 'https://www.outlooktravelmag.com/media/Bhutan-main-2025-1536x884.webp',
    imgCatastrofe: 'https://static.nationalgeographicla.com/files/styles/image_3200/public/marcuswestbergbhutan-8.jpg',
    imgEcologia: 'https://previews.123rf.com/images/langdu8x/langdu8x1709/langdu8x170900511/90223206-rice-field-with-pine-forest-in-bhutan-bhutan-is-a-small-country-in-the-himalayas-between-the-tibet.jpg',
  },

  'Suriname': {
    status: 'NEGATIVO',
    color: '#00cc66',
    descHover: 'Amplios bosques tropicales.',
    descGeneral: 'Surinam es carbono negativo debido a su enorme cobertura forestal y baja industrialización.',
    prediccion: 'Seguirá siendo negativo si controla la explotación forestal.',
    medidas: 'Protección de selvas y compromisos climáticos internacionales.',
    imgDefecto: 'https://media.istockphoto.com/id/1927599210/es/foto/paramaribo-surinam.jpg?s=612x612&w=0&k=20&c=0gNr1_4auIS7GwTsL5wI_L6TP_P5obaR4PzCPbwjboE=',
    imgCatastrofe: 'https://www.bothends.org/uploaded_files/mediaitem/deforestation.png',
    imgEcologia: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKjnZwkjyQfAKSu0sFmfxFhz53mDAbXrsw1Q&s',
  },

  'Panama': {
    status: 'NEGATIVO',
    color: '#00cc66',
    descHover: 'Uno de los pocos países carbono negativo.',
    descGeneral: 'Panamá mantiene balance negativo gracias a sus bosques tropicales y matriz energética relativamente limpia.',
    prediccion: 'Podría perder la condición si aumentan las emisiones urbanas.',
    medidas: 'Estrategia nacional de carbono neutralidad y protección forestal.',
    imgDefecto: 'https://www.revistainversionesynegocios.com/wp-content/uploads/2025/11/untitled-design-2022-11-02t160830516.jpg',
    imgCatastrofe: 'https://destinopanama.com.pa/wp-content/uploads/2024/01/UrbanixacionEstudio.jpg',
    imgEcologia: 'https://archivo.prensa-latina.cu/wp-content/uploads/2022/02/energia-renovables-Small.jpg',
  },

  'Gabon': {
    status: 'NEGATIVO',
    color: '#00cc66',
    descHover: 'Gran sumidero forestal.',
    descGeneral: 'Gabón absorbe más CO₂ del que emite debido a que más del 80% del país está cubierto por bosques.',
    prediccion: 'Se mantendrá negativo si continúa la protección forestal.',
    medidas: 'Políticas de conservación y mercado de créditos de carbono.',
    imgDefecto: 'https://sostenibilidadhn.wordpress.com/wp-content/uploads/2019/11/gabon.jpg',
    imgCatastrofe: 'https://www.independent.co.ug/wp-content/uploads/2019/05/Forests-degraded.jpg',
    imgEcologia: 'https://static.eldiario.es/clip/99353965-55c2-446f-92cb-3ee05183f544_16-9-aspect-ratio_default_0.jpg',
  },

  'Costa Rica': {
    status: 'NEUTRAL',
    color: '#ffcc00',
    descHover: 'Líder en energías renovables.',
    descGeneral: 'Costa Rica produce la mayor parte de su electricidad con renovables, manteniendo emisiones relativamente bajas.',
    prediccion: 'Podría alcanzar carbono neutralidad en próximas décadas.',
    medidas: 'Plan Nacional de Descarbonización.',
    imgDefecto: 'https://www.civitatis.com/f/costa-rica/san-jose/san-jose-m.jpg',
    imgCatastrofe: 'https://www.revistaeyn.com/binrepository/775x451/0c0/0d0/none/26086/DDDX/huella-carbono-emision_2666187_20221012104649.jpg',
    imgEcologia: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoqZJYRJMijt1KbPEMZXh_9a-DdrgSPdlXfQ&s',
  },

  'Uruguay': {
    status: 'NEUTRAL',
    color: '#ffcc00',
    descHover: 'Matriz eléctrica muy limpia.',
    descGeneral: 'Uruguay genera la mayoría de su electricidad con fuentes renovables, reduciendo su intensidad de carbono.',
    prediccion: 'Podría acercarse a la neutralidad si electrifica transporte.',
    medidas: 'Fuerte inversión en eólica y solar.',
    imgDefecto: 'https://19499770.fs1.hubspotusercontent-na1.net/hubfs/19499770/Punta%20Del%20Este%2C%20Uruguay.jpg',
    imgCatastrofe: 'https://latam-green.com/wp-content/uploads/2022/01/Uruguay-210122-a.jpeg',
    imgEcologia: 'https://www.energiaestrategica.com/wp-content/uploads/2021/09/uruguay-complementariedad-eolica-solar.jpg',
  },

  'Iceland': {
    status: 'NEUTRAL',
    color: '#ffcc00',
    descHover: 'Energía casi totalmente renovable.',
    descGeneral: 'Islandia usa principalmente energía geotérmica e hidroeléctrica, con bajas emisiones energéticas.',
    prediccion: 'Podría ser carbono neutral con captura de carbono.',
    medidas: 'Proyectos de captura y almacenamiento de CO₂.',
    imgDefecto: 'https://gti.images.tshiftcdn.com/9281960/x/0/top-15-things-to-do-amp-places-to-visit-in-iceland-2.jpg?ixlib=php-3.3.0&w=883',
    imgCatastrofe: 'https://static.euronews.com/articles/stories/08/42/58/80/1200x675_cmsv2_83b25cf2-9736-5b95-a2be-98ebd65719f4-8425880.jpg',
    imgEcologia: 'https://www.energias-renovables.com/ficheroenergias/fotos/eolica/ampliada/w/wweawoolnorth.jpg',
  },

  'New Zealand': {
    status: 'NEUTRAL',
    color: '#ffcc00',
    descHover: 'Emisiones moderadas con metas climáticas.',
    descGeneral: 'Nueva Zelanda tiene emisiones relevantes del sector agrícola pero avanza hacia la neutralidad.',
    prediccion: 'Sin cambios en agricultura, las emisiones seguirán moderadas.',
    medidas: 'Ley de carbono cero y expansión renovable.',
    imgDefecto: 'https://ichef.bbci.co.uk/ace/ws/640/amz/worldservice/live/assets/images/2015/08/10/150810123417_bandera_nueva_zelanda_624x351_jamesgray.jpg.webp',
    imgCatastrofe: 'https://www.fedeleche.cl/ww5/images/NOTICIAS/2022/n_20220928_0901.jpg',
    imgEcologia: 'https://www.ecoportal.net/wp-content/uploads/2019/11/636924680840468249_1.jpg_219914347.jpg',
  },
};
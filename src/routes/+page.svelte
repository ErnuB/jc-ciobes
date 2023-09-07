<script>
    import Carrusel from "./Carrusel.svelte";
    import Navbar from "./Navbar.svelte";
    import Modal from "./Modal.svelte";

    let isOverlayOpen = false;
    let selectedImage = null;
    let alternativeText = null;

    function openModal(imagen, altText) {
        selectedImage = imagen;
        alternativeText = altText;
        isOverlayOpen = true;
    };

    function closeModal() {
        selectedImage = null;
        alternativeText = null;
        isOverlayOpen = false;
    };

    let seccion = [
        {id:'entradas', nombre:"Entradas"},
        {id:'mar', nombre:"Del mar"}, 
        {id:'carnes', nombre:"Carnes"},
        {id:'ensaladas', nombre:"Ensaladas"},
        {id:'sopas', nombre:"Sopas"},
        {id:'especiales', nombre:"Especiales"},
        {id:'sandwiches', nombre:"Sandwiches"},
        {id:'desayunos', nombre:"Desayunos"},
        {id:'desayunos-especiales', nombre:"Desayunos Especiales"},
        {id:'tradicionales', nombre:"Guisados Tradicionales"},
        {id:'combinaciones', nombre:"Combinaciones"},
        {id:'natural', nombre:"Naturales"},
        {id:'bebidas', nombre:"Bebidas"},
        {id:'cocteles', nombre:"Cocteles"},
        {id:'cerveza', nombre:"Cerveza"},
    ];

    let items = [
        { category: 'entradas', nombre: 'Tiradito de salmón', descripcion: "Finas láminas de salmón bañado de vinagreta asiática con gengibre.", precio: "$215", precio2: "" },
        { category: 'entradas', nombre: 'Tiradito de atún', descripcion: "Finas láminas de atún bañado de vinagreta asiática con gengibre.", precio: "$209", precio2: "" },
        { category: 'entradas', nombre: 'Carpaccio de salmón', descripcion: "Finas láminas de salmón aderezado con vinagreta mediterranea, arúgula y parmesano.", precio: "$231", precio2: ""},
        { category: 'entradas', nombre: 'Ostiones en su concha', descripcion: "5 ostiones frescos en su concha acompañada de salsa rasurada", precio: "$209", precio2: ""},
        { category: 'entradas', nombre: 'Ostiones Rockefeller', descripcion: "5 ostiones hornados en espinacas a la crema, gratinados, coronados con tocino", precio: "$231", precio2: ""},
        { hasImage:true, imagen:"/img/ostiones.jpg", category: 'entradas', nombre: 'Ostiones a las brasas', descripcion: "5 ostiones a la parrilla y en su concha con mantequilla de la casa preparada con toque cítrico", precio: "$220", precio2: ""},
        { category: 'entradas', nombre: 'Alitas a las brasas', descripcion: "Alitas pasadas a las brasas sin harinas 10pz. Salsa a elegir: Salsa de ajo dulce/ Parmesano y ajo / BBQ / Bufalo / Lemon pepper", precio: "$154", precio2: ""},
        { category: 'entradas', nombre: 'Boneless a las brasas', descripcion: "Boneless crujientes con fécula de papa apta para bariatras 200g. Salsa a elegir: Salsa de ajo dulce/ Parmesano y ajo / BBQ / Bufalo / Lemon pepper", precio: "$154", precio2: ""},
        { category: 'entradas', nombre: 'Edamame thai', descripcion: "Edamames salteados con nuestra mezcla de especias orientales.", precio: "$105", precio2: ""},
        { category: 'entradas', nombre: 'Champiñones al ajillo', descripcion: "Champiñones recién salteados con aceite de oliva, chile guajillo y salsa inglesa.", precio: "$100", precio2: ""},
        { category: 'entradas', nombre: 'Tapa italiana', descripcion: "Pan tostado con quesos de cabra, arúgula, tomate y jamón serrano.", precio: "$110", precio2: ""},
        { category: 'entradas', nombre: 'Tostada de atún ahumado', descripcion: "Desmenuzado de atún ahumado con limón, pimienta, cebolla morada y un toque mayo spicy y poro frito", precio: "$121", precio2: ""},
        { hasImage:true, imagen:"/img/roca.jpg", category: 'entradas', nombre: 'Camarones roca', descripcion: "Clásicos camarones roca rebosados y crujientas con nuestra salsa spicy especial 150g. (prueba nuestra versión bariátrica 90g.)", precio: "$143", precio2: ""},
        { category: 'entradas', nombre: 'Queso fundido', descripcion: "Queso derretido coronado con chorizo dorado ó champiñones salteados.", precio: "$132", precio2: ""},
        { category: 'mar', nombre: 'Ceviche Moy', descripcion: "Ceviche de camarón cocido, mango y jícama refrescante con un toque picocito.", precio: "B $138", precio2: "N $209"},
        {  hasImage:true, imagen:"/img/ceviche.jpg",category: 'mar', nombre: 'Ceviche mitotero', descripcion: "Camarón, pescado y pulpo.", precio: "B $165", precio2: "N $242"},
        { category: 'mar', nombre: 'Ceviche nipón', descripcion: "Atún, pulpo y kanikama con un toque de picante japones.", precio: "B $99", precio2: "N $198"},
        { hasImage:true, imagen:"/img/aguachile-mixto.jpg", category: 'mar', nombre: 'Aguachile', descripcion: "Camarones marinados con limón, pepino, cebolla morada y salsa a elegir de la casa, pide la versión bariátrica sin picante. Salsa roja / Salsa verde / Salsa negra.", precio: "B $110", precio2: "N $204" },
        { hasImage:true, imagen:"/img/aguachile-mixto.jpg", category: 'mar', nombre: 'Aguachile', descripcion: "Camarones con pulpo marinados con limón, pepino, cebolla morada y salsa a elegir de la casa, pide la versión bariátrica sin picante. Salsa roja / Salsa verde / Salsa negra.", precio: "B $143", precio2: "N $237"},
        { category: 'mar', nombre: 'Coco con mariscos', descripcion: "Camarón cocido, camarón crudo, pulpo, pescado, pepino, cebolla morada y coco fresco con toque de caldo de camarón", precio: "B $154", precio2: "N $242" },
        { category: 'mar', nombre: 'Tacos gober', descripcion: "Tacos dorados con queso, machaca de camarón o marlin. Cambia a la versión bariátrica con tortilla de nopal", precio: "pz. $60", precio2:"3 pz. $165"},
        { category: 'mar', nombre: 'Brochetas mar y tierra', descripcion: "Brochetas con camarón, arrachera, pimiento y cebolla; bañados en salsa chimichurri sobre una cama de lechugas mixtas.", precio: "pz. $72", precio2:"3 pz. $198" },
        { category: 'mar', nombre: 'Camarones zarandeados', descripcion: "Camarones con adobo de la casa acompañados con ensalada y papas fritas", precio: "B $143", precio2:"N $231" },
        { category: 'mar', nombre: 'Filete zarandeao', descripcion: "Filete de pescado con adobo de la casa acompañado de ensalada y papas fritas", precio: "B $138", precio2:"N $242" },
        { hasImage:true, imagen:"/img/pulpo.jpg", category: 'mar', nombre: 'Pulpo chimichurri', descripcion: "Pulpo a las brazas con marinado de la casa, acompañado de limón asado, papas sazonadas y ensalada.", precio: "B $187", precio2:"N $352" },
        { hasImage:true, imagen:"/img/atun.jpg", category: 'mar', nombre: 'Tacos de carnitas de atún', descripcion: "Ricos tacos de lechuga con carnitas de atún, guacamole de la casa, aderezo spicy, coronado con camote frito", precio: "pz. $61", precio2:"3 pz. $165" },
        { category: 'mar', nombre: 'Filete relleno de mariscos', descripcion: "Filete de pescado relleno de camarón y pulpo, envuelto en tocino; bañado en champiñones a la crema. Acompañado de ensalada y papas fritas.", precio: "B $165", precio2:"N $308" },
        { category: 'mar', nombre: 'Filete empapelado', descripcion: "Filete de pescado cocinado al vapor con verduras mixtas, un toque de mantequilla y vino blanco. Acompañado de ensalada y papas fritas.", precio: "B $138", precio2:"N $242" },
        { hasImage:true, imagen:"/img/salmon.jpg", category: 'mar', nombre: 'Salmón alcaparrado', descripcion: "Salmón a las brasas, marinado en mantequilla, alcaparras, limón y romero; acompañado de ensalada y una cama de camote frito.", precio: "B $176", precio2:"$325" },
        { hasImage:true, imagen:"/img/salmon3q.jpg", category: 'mar', nombre: 'Salmón a los tres quesos', descripcion: "Salmón a la plancha, bañada en salsa tres quesos de la casa; acompañado de ensalada y una cama de camote frito.", precio: "B $176", precio2:"N $325" },
        { hasImage:true, imagen:"/img/salmon-mostaza.jpg", category: 'mar', nombre: 'Salmón a la miel y mostaza', descripcion: "Salmón marinado en aderezo de la casa, pasado al horno para caramelizar. acompañado de ensalada y una cama de camote frito.", precio: "$176", precio2:"$325" },
        { category: 'carnes', nombre: 'Filete a las brasas con salsa de champiñon y vino tinto.', descripcion: "Filete a término, bañada con salsa de reducción de vino tinto, champiñón y romero. Acompañado de verduras salteadas y puré de papa o coliflor versión bariátrica.", precio: "B $176", precio2:"N $319" },
        { category: 'carnes', nombre: 'Rib eye a las con mantequilla a las finas hiervas', descripcion: "Corte americano a la parrilla con mantequilla a las finas hiervas; acompañado de papas y ensalada.", precio: "", precio2:"$330" },
        { category: 'carnes', nombre: 'Rib eye cajún', descripcion: "Corte amerinano a la parrilla con un adobo seco; acompañado de elote, papas y ensalada.", precio: "", precio2:"$352" },
        { category: 'carnes', nombre: 'Arrachera a la tampiqueña', descripcion: "Arrachera a la parrilla acompañada de guacamole, frijoles y una tortilla enchilada con queso y crema", precio: "B $165", precio2:"N $253" },
        { hasImage:true, imagen:"/img/arrachera-fajas.jpg", category: 'carnes', nombre: 'Fajitas de arrachera', descripcion: "Arrachera asada con pimientos y cebollas, acompañadas de guacamole y frijol.", precio: "B $132", precio2:"N $220" },
        { category: 'carnes', nombre: 'Fajitas pechuga', descripcion: "Pechuga asada con pimientos y cebollas, acompañadas de guacamole y frijol.", precio: "B $110", precio2:"N $198" },
        { category: 'carnes', nombre: 'Fajitas mixtas', descripcion: "Camarón, arrachera y pulpo salteado con pimientos, cebolla y champiñones, acompañado de frijol y guacamole.", precio: "B $165", precio2:"N $275" },
        { category: 'carnes', nombre: 'Cabrería gratinada', descripcion: "Cabrería a las brasas y gratinada, acompañada de papas fritas, ensalada o verduras asadas.", precio: "B $165", precio2:"N $297" },
        { category: 'carnes', nombre: 'Cabrería gratinada con camarones', descripcion: "Cabrería a las brasas y gratinada, acompañada de papas fritas, ensalada o verduras asadas.", precio: "B $170", precio2:"N $319" },
        {  hasImage:true, imagen:"/img/cabreria-gaucha.jpg",category: 'carnes', nombre: 'Cabrería gaucha', descripcion: "Cabrería a la parrilla acompañada de chorizo argentino ensalada y papas.", precio: "B $193", precio2:"N $341" },
        { category: 'carnes', nombre: 'Costillas BBQ', descripcion: "Costillas BBQ a la parrilla acompañadas de papa y elote; bariátrico: con ensalada BBQ sin azucar", precio: "B $143", precio2:"N $275" },
        { hasImage:true, imagen:"/img/betabel-asado.jpg", category: 'ensaladas', nombre: 'Ensalada de betabel asado', descripcion: "Betabel asado con un mix de lechugas, queso de cabra, frutos secos y vinagreta balsámica.", precio: "B $132", precio2:"N $187" },
        { category: 'ensaladas', nombre: 'Ensalada César', descripcion: "Lechugas con nuestro aderezo César casero, con parmesano y crotones.", precio: "B $110", precio2:"N $165" },
        { category: 'ensaladas', nombre: 'Ensalada César con pollo', descripcion: "Lechugas con nuestro aderezo César casero, con parmesano y crotones.", precio: "B $132", precio2:"N $187" },
        { category: 'ensaladas', nombre: 'Ensalada César con camarón', descripcion: "Lechugas con nuestro aderezo César casero, con parmesano y crotones.", precio: "B $154", precio2:"N $209" },
        { hasImage:true, imagen:"/img/ensalada-griega.jpg", category: 'ensaladas', nombre: 'Ensalada griega', descripcion: "Lechugas mixtas, cebolla morada, tomates, pepino, aceituna negra y queso feta con vinagreta de la casa.", precio: "B $110", precio2:"N $165" },
        { hasImage:true, imagen:"/img/ensalada-griega.jpg", category: 'ensaladas', nombre: 'Ensalada griega con pollo', descripcion: "Lechugas mixtas, cebolla morada, tomates, pepino, aceituna negra y queso feta con vinagreta de la casa.", precio: "B $132", precio2:"N $187" },
        { hasImage:true, imagen:"/img/ensalada-griega.jpg", category: 'ensaladas', nombre: 'Ensalada griega con camarón', descripcion: "Lechugas mixtas, cebolla morada, tomates, pepino, aceituna negra y queso feta con vinagreta de la casa.", precio: "B $154", precio2:"N 209" },
        { category: 'ensaladas', nombre: 'Ensalada mediterranea con salmón', descripcion: "Lechugas mixtas, arúgula, frutos secos, queso de cabra y salmón curado de la casa.", precio: "B $165", precio2:"N $231" },
        { category: 'sopas', nombre: 'Sopa azteca', descripcion: "Sopa de tomate con frituras de tortilla, aguacate, queso panela, y pollo desmenuzado.", precio: "B $44", precio2:"N $99" },
        { category: 'sopas', nombre: 'Sopa de camarón o mariscos', descripcion: "Sopa de camarón con calabaza, zanahoria, papa, pescado y pulpo.", precio: "B $99", precio2:"N $154" },
        { category: 'sopas', nombre: 'Jugo de carne', descripcion: "Fondo de res concentrado con cebolla caramelizada.", precio: "B $88", precio2:"N $143" },
        { category: 'sopas', nombre: 'Sopa del día', descripcion: "Sopa ó crema del día, pregunta a servicio.", precio: "B $44", precio2:"N $99" },
        { hasImage:true, imagen:"/img/yakimeshi.jpg", category: 'especiales', nombre: 'Yakimeshi mixto', descripcion: "Res, pollo camarón y verduras varias; con tampico, queso crema, aguacate. Quinoa y coliflor como sustituto de arroz para bariatas.", precio: "$175", precio2:"" },
        { category: 'especiales', nombre: 'Arroz marinero', descripcion: "Camarón y pulpo con arroz ó quinoa y coliflor; salteado con mantequilla y verduras.", precio: "$209", precio2:"" },
        { category: 'especiales', nombre: 'Guiso cantonés', descripcion: "Res, pollo y camarón salteado con verduras y brotes de soya; se puede cambiar bariátrico con quinoa y coliflor.", precio: "$198", precio2:"" },
        { hasImage:true, imagen:"/img/arrachera-brocoli.jpg", category: 'especiales', nombre: 'Arrachera con brócoli', descripcion: "Arrachera salteada con cebolla y brócoli, tradicional de la comida china.", precio: "$176", precio2:"" },
        { category: 'especiales', nombre: 'Pollo almendrado', descripcion: "Pollo salteado con verduras, jícama y almendras tostadas.", precio: "$176", precio2:"" },
        { category: 'especiales', nombre: 'Camarones en salsa de ostión', descripcion: "Camarones salteados con verduras y salsa de ostión.", precio: "$209", precio2:"" },
        { hasImage:true, imagen:"/img/kung-pao.jpg", category: 'especiales', nombre: 'Pollo Kung Pao', descripcion: "Pollo salteado con pimientos y verduras, con salsa kung pao y cacahuates tostados.", precio: "$176", precio2:"" },
        { hasImage:true, imagen:"/img/sushi.jpg", category: 'especiales', nombre: 'Sushi Ciobes', descripcion: "Base de lechuga, pepino, aguacate, queso crema y atún. Topping de tampico y aderezo spicy.", precio: "$165", precio2:"" },
        { hasImage:true, imagen:"/img/signia.jpg", category: 'especiales', nombre: 'Sushi Signia', descripcion: "Base de lechuga, pepino, aguacate, queso crema y salmón; con topping de kanikama spicy.", precio: "$182", precio2:"" },
        { category: 'sandwiches', nombre: 'Hamburguesa con queso y tocino', descripcion: "Hamburguesa de res con queso y tocino, set de verduras y pan de mantequilla. Pide la versión bariátrica con pan de almendras.", precio: "B $98", precio2:"N $132" },
        { category: 'sandwiches', nombre: 'Hamburguesa de atún', descripcion: "Atún dorado con ajonjolí y un toque spicy, arúgula, aderezo hoisin y pan de mantequilla. Pide la versión bariátrica con pan de almendras.", precio: "B $105", precio2:"N $160" },
        { category: 'sandwiches', nombre: 'Hamburguesa de camarón', descripcion: "Hamburguesa de camarón con un toque ahumado, queso, set de verduras en pan de mantequilla. Pidelo para bariatra con pan de almendras.", precio: "B $110", precio2:"N $182" },
        { category: 'sandwiches', nombre: 'Club sandwich', descripcion: "Clásico sandwich de pollo, jamón, tocino y queso; acompañado con papas.", precio: "", precio2:"$154" },
        { category: 'sandwiches', nombre: 'Bagel de salmón', descripcion: "Pan bagel dorado con queso crema, salmón, alcaparra y cebolla.", precio: "B $105", precio2:"N $154" },
        { category: 'sandwiches', nombre: 'Bagel de jamón ibérico e higos', descripcion: "Pan bagel dorado con queso crema, arúgula y arándanos, jamón, almendras y reducción de balsámico.", precio: "B $110", precio2:"N $165" },
        { category: 'desayunos', nombre: 'HUEVOS AL GUSTO:', descripcion: "", precio: "", precio2:"" },
        { category: 'desayunos', nombre: 'Revueltos', descripcion: "", precio: "B $60", precio2:"N $100" },
        { category: 'desayunos', nombre: 'Claras', descripcion: "", precio: "B $60", precio2:"N $100" },
        { category: 'desayunos', nombre: 'Estrellados', descripcion: "", precio: "B $60", precio2:"N $100" },
        { category: 'desayunos', nombre: 'A la mexicana', descripcion: "", precio: "B $60", precio2:"N $100" },
        { category: 'desayunos', nombre: 'Con migas o sopitas', descripcion: "", precio: "B $60", precio2:"N $100" },
        { category: 'desayunos', nombre: 'Con jamón', descripcion: "", precio: "B $70", precio2:"N $120" },
        { category: 'desayunos', nombre: 'Chorizo', descripcion: "", precio: "B $70", precio2:"N $120" },
        { category: 'desayunos', nombre: 'Tocino', descripcion: "", precio: "B $70", precio2:"N $120" },
        { category: 'desayunos', nombre: 'HUEVOS ESPECIALES:', descripcion: "", precio: "", precio2:"" },
        { category: 'desayunos', nombre: 'Huevos veracruzanos', descripcion: "Dobladitas de maíz rellenas de huevo a la mexicana, bañadas con salsa de frijol, chorizo dorado, crema y queso.", precio: "B $100", precio2:"N $155" },
        { category: 'desayunos', nombre: 'Huevos culichis', descripcion: "Huevos estrellados, montados sobre tortilla dorada con marlin a la mexicana, aguacate, queso crema; que se acompaña de frijol y ensalada.", precio: "B $100", precio2:"N $145" },
        { category: 'desayunos', nombre: 'Huevos norteños con arrachera', descripcion: "Huevos estrellados, montados sobre tortilla dorada, arrachera a las brasas, con salsa verde, crema y queso; acompañados de frijol y ensalada. Puedes pedirlos divorciados.", precio: "B $110", precio2:"N $155" },
        { category: 'desayunos', nombre: 'Huevos montados rancheros', descripcion: "Huevos estrellados, montados sobre tortilla dorada con salsa guisada, se acompaña de frijol y ensalada.", precio: "B $90", precio2:"N $120" },
        { category: 'desayunos', nombre: 'Huevos a la española', descripcion: "Huevos tiernos, montados sobre papa frita, salsa de tomate y jamón serrano.", precio: "B $100", precio2:"N $145" },
        { category: 'desayunos', nombre: 'Huevos motuleños', descripcion: "Huevos estrellados sobre tortilla dorada bañados con una salsa motul de tomate con jamón coronados de plátano macho, crema y queso; se acompaña de frijol y ensalada.", precio: "B $100", precio2:"N $145" },
        { category: 'desayunos', nombre: 'Omelette Ciobes', descripcion: "Relleno de queso manchego con vegetales y proteina a elegir", precio: "B $85", precio2:"N $130" },
        { category: 'desayunos', nombre: 'Huevos a la albañil con arrachera', descripcion: "Huevos revueltos, ahogados con salsa verde con arrachera; coronados con crema y queso, acompañado de frijoles.", precio: "B $90", precio2:"N $145" },
        { hasImage:true, imagen:"/img/pan-frances.jpg", category: 'desayunos-especiales', nombre: 'Pan frances con fresas', descripcion: "El clásico pan frances bañado en salsa dulce de crema y curtido de fresas.", precio: "", precio2:"$125" },
        { category: 'desayunos-especiales', nombre: 'Hot cakes con tocino', descripcion: "Hot cakes acompañados de tocino dorado y fruta de temporada.", precio: "", precio2:"$130" },
        { category: 'desayunos-especiales', nombre: 'Panela asada bandera', descripcion: "Panela asada a la plancha, bañada en salsa roja y verde sobre una penca de nopal con frijol y ensalada.", precio: "B $110", precio2:"N $145" },
        { category: 'desayunos-especiales', nombre: 'Avocado Toast', descripcion: "Pan tostado con aguacate, arúgula, queso de cabra y huevo al gusto.", precio: "", precio2:"$110" },
        { category: 'desayunos-especiales', nombre: 'Chimichanga de arrachera', descripcion: "Dos burritos fritos de harina, rellenos de queso, frijol y arrachera; bañados en salsa verde, crema y queso; con guarnición de ensalada de papas.", precio: "", precio2:"$170" },
        { category: 'desayunos-especiales', nombre: 'Volcanes de arrachera y huevo', descripcion: "Dos tortilla doradas a la brasas con queso y arrachera; con huevos estrellados en salsa de tu elección y acompañados de frijol y ensalada.", precio: "B $120", precio2:"N $170" },
        { hasImage:true, imagen:"/img/enmolada.jpg", category: 'desayunos-especiales', nombre: 'Enmoladas de pollo', descripcion: "Dobladitas de pollo, bañadas con salsa de mole, crema, queso y cebolla; pide la opción bariátrica con calabaza como tortilla", precio: "B $85", precio2:"N $130" },
        { category: 'desayunos-especiales', nombre: 'Enmoladas de camarón', descripcion: "Dobladitas de camarón a la mexicana, bañadas con salsa de mole, queso, crema y cebolla; pide la opción bariátrica con calabaza como tortilla", precio: "B $110", precio2:"N $160" },
        { hasImage:true, imagen:"/img/chilaquiles-verdes.jpg", category: 'desayunos-especiales', nombre: 'Chilaquiles', descripcion: "Puden ser verdes, rojos ó divorciados acompañados de frijol y ensalada. La versión bariátrica con tortilla horneada de nopal.", precio: "B $90", precio2:"N $110" },
        { hasImage:true, imagen:"/img/chilaquiles-verdes.jpg", category: 'desayunos-especiales', nombre: 'Chilaquiles con pollo', descripcion: "Puden ser verdes, rojos ó divorciados acompañados de frijol y ensalada. La versión bariátrica con tortilla horneada de nopal.", precio: "B $100", precio2:"N $120" },
        { hasImage:true, imagen:"/img/chilaquiles-verdes.jpg", category: 'desayunos-especiales', nombre: 'Chilaquiles con arrachera', descripcion: "Puden ser verdes, rojos ó divorciados acompañados de frijol y ensalada. La versión bariátrica con tortilla horneada de nopal.", precio: "B $110", precio2:"N $135" },
        { hasImage:true, imagen:"/img/chilaquiles-verdes.jpg", category: 'desayunos-especiales', nombre: 'Chilaquiles con camarón', descripcion: "Puden ser verdes, rojos ó divorciados acompañados de frijol y ensalada. La versión bariátrica con tortilla horneada de nopal.", precio: "B $120", precio2:"N $150" },
        { category: 'desayunos-especiales', nombre: '*Agregar Huevo', descripcion: "", precio: "", precio2:"$15" },
        { category: 'tradicionales', nombre: 'Chilorio a la mexicana o encebollado', descripcion: "", precio: "B $65", precio2:"N $110"},
        { category: 'tradicionales', nombre: 'Chorizo a la mexicana o con papas', descripcion: "", precio: "B $65", precio2:"N $110"},
        { category: 'tradicionales', nombre: 'Hígado a la mexicana o encebollado', descripcion: "", precio: "B $60", precio2:"N $90"},
        { hasImage:true, imagen:"/img/lengua.jpg",category: 'tradicionales', nombre: 'Lengua en salsa verde o a la mexicana', descripcion: "", precio: "B $80", precio2:"N $140"},
        { hasImage:true, imagen:"/img/camaron-ranchero.jpg",category: 'tradicionales', nombre: 'Camarones rancheros', descripcion: "", precio: "B $90", precio2:"N $150"},
        { hasImage:true, imagen:"/img/marlin.jpg", category: 'tradicionales', nombre: 'Marlin a la mexicana', descripcion: "", precio: "B $90", precio2:"N $150"},
        { category: 'tradicionales', nombre: 'Rajas con pollo', descripcion: "", precio: "B $70", precio2:"$90"},
        { category: 'tradicionales', nombre: 'Rajas con camarón', descripcion: "", precio: "B $80", precio2:"N $130"},
        { category: 'tradicionales', nombre: 'Chicharrón en salsa verde o a la mexicana', descripcion: "", precio: "B $85", precio2:"N $110"},
        { hasImage:true, imagen:"/img/machaca.jpg", category: 'tradicionales', nombre: 'Machaca a la mexicana o sonora', descripcion: "", precio: "B $90", precio2:"N $120"},
        { category: 'combinaciones', nombre: '', descripcion: "Combinación incluye, huevos al gusto y un tamal frito", precio:"", precio2:""},
        { category: 'combinaciones', nombre: 'Chilorio a la mexicana o encebollado', descripcion: "", precio:"B $100", precio2:"N $150"},
        { category: 'combinaciones', nombre: 'Chorizo a la mexicana o con papas', descripcion: "",precio:"B $100", precio2:"N $150"},
        { hasImage:true, imagen:"/img/higado.jpg", category: 'combinaciones', nombre: 'Hígado a la mexicana o encebollado', descripcion: "",precio:"B $90", precio2:"N $130"},
        { hasImage:true, imagen:"/img/lengua.jpg",category: 'combinaciones', nombre: 'Lengua en salsa verde o a la mexicana', descripcion: "", precio: "B $120", precio2:"N $180"},
        { hasImage:true, imagen:"/img/camaron-ranchero.jpg",category: 'combinaciones', nombre: 'Camarones rancheros', descripcion: "", precio: "B $130", precio2:"N $190"},
        { category: 'combinaciones', nombre: 'Márlin a la mexicana', descripcion: "", precio:"B $100", precio2:"N $180"},
        { category: 'combinaciones', nombre: 'Rajas con pollo', descripcion: "", precio:"B $90", precio2:"N $180"},
        { category: 'combinaciones', nombre: 'Rajas con camarón', descripcion: "", precio:"B $120", precio2:"N $130"},
        { category: 'combinaciones', nombre: 'Chicharrón en salsa verde o a la mexicana', descripcion: "", precio:"B $110", precio2:"N $160"},
        { hasImage:true, imagen:"/img/machaca.jpg", category: 'combinaciones', nombre: 'Machaca a la mexicana o sonora', descripcion: "", precio:"B $115", precio2:"N $160"},
        { category: 'natural', nombre: 'Fruta de temporada', descripcion: "Plato de fruta variada según la temporada.", precio: "$70", precio2:"" },
        { category: 'natural', nombre: 'Fruta con yogurt y granola', descripcion: "Fruta de temporada acompañada de yogurt griego y granola.", precio: "$110", precio2:"" },
        { category: 'bebidas', nombre: 'Batidos de proteina con colágeno', descripcion: "", precio: "", precio2:"$120" },
        { category: 'bebidas', nombre: '', descripcion: "•Plátano", precio: "", precio2:"" },
        { category: 'bebidas', nombre: '', descripcion: "•Chocolate", precio: "", precio2:"" },
        { category: 'bebidas', nombre: '', descripcion: "•Capuccino", precio: "", precio2:"" },
        { category: 'bebidas', nombre: '', descripcion: "•Piña colada", precio: "", precio2:"" },
        { category: 'bebidas', nombre: '', descripcion: "•Fresa", precio: "", precio2:"" },
        { category: 'bebidas', nombre: '', descripcion: "•Vainilla", precio: "", precio2:"" },
        { category: 'bebidas', nombre: 'Especiales', descripcion: "", precio: "", precio2:"$150" },
        { category: 'bebidas', nombre: '', descripcion: "•Café con chocolate y plátano", precio: "", precio2:"" },
        { category: 'bebidas', nombre: '', descripcion: "•Leche dorada", precio: "", precio2:"" },
        { category: 'bebidas', nombre: '', descripcion: "•Frutos rojos", precio: "", precio2:"" },
        { category: 'bebidas', nombre: '', descripcion: "•Piñada", precio: "", precio2:"" },
        { category: 'bebidas', nombre: '', descripcion: "•Chai de cárdamo", precio: "", precio2:"" },
        { category: 'bebidas', nombre: 'Extras', descripcion: "", precio: "", precio2:"$30" },
        { category: 'bebidas', nombre: '', descripcion: "Carbón activado / Aceite de linaza / Chía", precio: "", precio2:"" },
        { category: 'bebidas', nombre: 'Kombucha', descripcion: "Bebida probiótica especializada para bariátricos.", precio: "", precio2:"$75" },
        { category: 'bebidas', nombre: '', descripcion: "•Jamaica salvaje", precio: "", precio2:"" },
        { category: 'bebidas', nombre: '', descripcion: "•Manzana", precio: "", precio2:"" },
        { category: 'bebidas', nombre: '', descripcion: "•Original", precio: "", precio2:"" },
        { category: 'bebidas', nombre: 'Té verde Chá Chá', descripcion: "", precio: "", precio2:"$70" },
        { category: 'bebidas', nombre: 'BEBIDA DE FRUTAS NATURALES', descripcion: "", precio: "", precio2:"" },
        { category: 'bebidas', nombre: '•Frambuesa', descripcion: "", precio: "", precio2:"$65" },
        { category: 'bebidas', nombre: '•Guayaba', descripcion: "", precio: "", precio2:"$65" },
        { category: 'bebidas', nombre: '•Mandarina', descripcion: "", precio: "", precio2:"$65" },
        { category: 'bebidas', nombre: '•Manzana', descripcion: "", precio: "", precio2:"$65" },
        { category: 'bebidas', nombre: '•Maracuyá', descripcion: "", precio: "", precio2:"$65" },
        { category: 'bebidas', nombre: '•Narajna', descripcion: "", precio: "", precio2:"$45" },
        { category: 'bebidas', nombre: '•Naranja y zanahoria', descripcion: "", precio: "", precio2:"$45" },
        { category: 'bebidas', nombre: '•Naranja y betabel', descripcion: "", precio: "", precio2:"$45" },
        { category: 'bebidas', nombre: '•Jugo verde', descripcion: "", precio: "", precio2:"$45" },
        { category: 'bebidas', nombre: 'AGUAS FRESCAS', descripcion: "", precio: "", precio2:"" },
        { category: 'bebidas', nombre: 'Limonada', descripcion: "", precio: "Mineral $40", precio2:"Natural $35" },
        { category: 'bebidas', nombre: 'Naranajada', descripcion: "", precio: "Mineral $40", precio2:"Natural $35" },
        { category: 'bebidas', nombre: 'EMBOTELLADOS', descripcion: "", precio: "", precio2:"" },
        { category: 'bebidas', nombre: 'Refresco', descripcion: "", precio: "$30", precio2:"" },
        { category: 'bebidas', nombre: 'Perrier', descripcion: "", precio: "$45", precio2:"" },
        { category: 'bebidas', nombre: 'Agua Mineral', descripcion: "", precio: "$30", precio2:"" },
        { category: 'bebidas', nombre: 'Agua Natural', descripcion: "", precio: "$25", precio2:"" },
        { category: 'bebidas', nombre: 'CAFETERÍA', descripcion: "", precio: "", precio2:"" },
        { category: 'bebidas', nombre: 'Americano', descripcion: "Con refill", precio: "$35", precio2:"" },
        { category: 'bebidas', nombre: 'Expresso', descripcion: "", precio: "$40", precio2:"doble $50" },
        { category: 'bebidas', nombre: 'Té', descripcion: "Variedad", precio: "$30", precio2:"" },
        { category: 'bebidas', nombre: 'Capuccino', descripcion: "", precio: "$60", precio2:"" },
        { category: 'bebidas', nombre: 'Latte', descripcion: "", precio: "$65", precio2:"" },
        { category: 'bebidas', nombre: 'Chai', descripcion: "", precio: "$60", precio2:"" },
        { category: 'bebidas', nombre: 'Dirty Chai', descripcion: "", precio: "$60", precio2:"" },
        { category: 'bebidas', nombre: 'FRAPES', descripcion: "", precio: "", precio2:"" },
        { category: 'bebidas', nombre: 'Frapuccino', descripcion: "", precio: "$65", precio2:"" },
        { category: 'bebidas', nombre: 'Frapé chai', descripcion: "", precio: "$70", precio2:"" },
        { category: 'bebidas', nombre: 'Frapé moka', descripcion: "", precio: "$75", precio2:"" },
        { category: 'bebidas', nombre: 'Frapé caramelo', descripcion: "", precio: "$75", precio2:"" },
        { category: 'bebidas', nombre: 'Frapé Irlandes', descripcion: "", precio: "$73", precio2:"" },
        { category: 'bebidas', nombre: 'Frapé coffee toffee', descripcion: "", precio: "$75", precio2:"" },
        { category: 'bebidas', nombre: 'Frapé coco', descripcion: "", precio: "$65", precio2:"" },
        { category: 'bebidas', nombre: 'Frapé ice cereza', descripcion: "", precio: "$70", precio2:"" },
        { category: 'cocteles', nombre: 'Piña colada', descripcion: "", precio: "$140", precio2:"" },
        { category: 'cocteles', nombre: 'Piña bora bora', descripcion: "", precio: "$150", precio2:"" },
        { category: 'cocteles', nombre: 'Beso de mezcal', descripcion: "", precio: "$150", precio2:"" },
        { category: 'cocteles', nombre: 'Tinto de verano', descripcion: "", precio: "$130", precio2:"" },
        { category: 'cocteles', nombre: 'Clericot', descripcion: "", precio: "$135", precio2:"" },
        { category: 'cocteles', nombre: 'Gin Tonic', descripcion: "", precio: "$145", precio2:"" },
        { category: 'cocteles', nombre: 'Gin Frutos Rojos', descripcion: "", precio: "$170", precio2:"" },
        { category: 'cocteles', nombre: 'Gin Pepino Romero', descripcion: "", precio: "$165", precio2:"" },
        { category: 'cocteles', nombre: 'Carajillo Clásico', descripcion: "", precio: "$140", precio2:"" },
        { category: 'cocteles', nombre: 'Carajilo Baileys', descripcion: "", precio: "$160", precio2:"" },
        { category: 'cocteles', nombre: 'Carajillo Mazapán', descripcion: "", precio: "$165", precio2:"" },
        { category: 'cocteles', nombre: 'Ruso Blanco', descripcion: "", precio: "$135", precio2:"" },
        { category: 'cocteles', nombre: 'Ruso Negro', descripcion: "", precio: "$130", precio2:"" },
        { category: 'cocteles', nombre: 'Paloma', descripcion: "", precio: "$130", precio2:"" },
        { category: 'cocteles', nombre: 'Margarita', descripcion: "", precio: "$135", precio2:"" },
        { category: 'cocteles', nombre: 'Margarita de piña', descripcion: "", precio: "$140", precio2:"" },
        { category: 'cocteles', nombre: 'Monkdy drink', descripcion: "", precio: "$120", precio2:"" },
        { category: 'cocteles', nombre: 'Brisas del bosque', descripcion: "", precio: "$115", precio2:"" },
        { category: 'cocteles', nombre: 'Brisas del bosque', descripcion: "(sin alcohol)", precio: "$65", precio2:"" },
        { category: 'cerveza', nombre: 'Pacífico Clara', descripcion: "", precio: "$45", precio2:"" },
        { category: 'cerveza', nombre: 'Pacífico Suave', descripcion: "", precio: "$45", precio2:"" },
        { category: 'cerveza', nombre: 'Tecate Roja', descripcion: "", precio: "$45", precio2:"" },
        { category: 'cerveza', nombre: 'Tecate light', descripcion: "", precio: "$45", precio2:"" },
        { category: 'cerveza', nombre: 'Modelo Especial', descripcion: "", precio: "$60", precio2:"" },
        { category: 'cerveza', nombre: 'Negra Modelo', descripcion: "", precio: "$60", precio2:"" },
        { category: 'cerveza', nombre: 'Modelo Ambar', descripcion: "", precio: "$60", precio2:"" },
        { category: 'cerveza', nombre: 'Modelo Trigo', descripcion: "", precio: "$60", precio2:"" },
        { category: 'cerveza', nombre: 'Artesanal Ale', descripcion: "", precio: "$80", precio2:"" },
        { category: 'cerveza', nombre: 'Artesanal Ale Tostado', descripcion: "", precio: "$80", precio2:"" },
        { category: 'cerveza', nombre: 'Artesanal Doble Malta', descripcion: "", precio: "$80", precio2:"" },
        { category: 'cerveza', nombre: 'Ultra', descripcion: "", precio: "$50", precio2:"" },
    ];

  function getFilteredItems(category) {
    return items.filter(item => item.category === category);
  }
</script>

<style>

.background-section {
  background-image: url('/img/fondo.jpg');
  background-size: 100% 100%;
  text-shadow: 1px 1px 2px rgba(25, 25, 25, .5);
}

.sombra {
  text-shadow: 1px 1px 2px rgba(25, 25, 25, .5);
}

</style>

<svelte:head>
  <title>Menú JC Ciobes</title>
</svelte:head>

<header class="bg-ciobes">
  <div class="w-4/5 m-auto p-5">
    <img src="img/JCClogo.png" alt="JC - Ciobes">
  </div>
  <Carrusel />
</header>
<Navbar />
  {#each seccion as seccionItem}
  <div id="{seccionItem.id}" class="scroll-mt-24"></div>
  <section class="background-section p-2 mx-3 my-6 shadow-[4px_4px_10px_4px_#101010]">
    <div class="pt-10">
      <div class="flex justify-center items-center">
        <h2 class="sombra z-10 mb-4 text-center text-2xl uppercase">{seccionItem.nombre}</h2>
      </div>
      {#each getFilteredItems(seccionItem.id) as item}
      {#if item.hasImage}
      <div class="flex gap-2 items-center mx-1 mt-2">
        <button class="text-xl sombra text-start ml-1" on:click={() => openModal(item.imagen, '')}>
            {item.nombre}&thinsp;<i class="fa-regular fa-image"></i>
        </button>
        <div class="grow"></div>
          <p class="shrink-0">{item.precio}</p>
          <p class="shrink-0">{item.precio2}</p>
      </div>
      {:else}
      <div class="flex gap-2 items-center mx-1 mt-2">
        <h3 class="text-xl ml-1">{item.nombre}</h3>
        <div class="grow"></div>
        <p class="shrink-0">{item.precio}</p>
        <p class="shrink-0">{item.precio2}</p>
      </div>
      {/if}
      <p class="ml-5 italic mr-14 mb-6 leading-4 text-base text-justify">{item.descripcion}</p>
      {/each}
    </div>
    <div class="mb-10"></div>
    </section>
    {/each}
  <div class="relative">
    <img src="/img/DSC01496.jpg" alt="Gracias por visitarnos" class="w-full">
    <img src="/img/gracias.png" alt="Gracias por visitarnos" class="absolute top-3/4 left-[20%] w-2/3">
  </div>
  <div class="h-20"></div>
  <!-- <div class="bg-white rounded-full w-12 h-12 text-center fixed z-50 top-24 right-2">
    <a href="https://wa.me/5216673718251" target="_blank"><i class="fa-brands fa-whatsapp text-4xl mt-1 text-green-600"></i></a>
  </div> -->
  <footer class="fixed bottom-0 z-50 shadow-[4px_4px_10px_4px_#101010]">
    <div class="flex p-4 bg-base-back items-center">
        <a href="https://goo.gl/maps/f37YqjLoKyGpne4w8" class="text-base w-2/3 border-r-2 px-2 border-slate-900 text-center"><i class="fa fa-location-dot text-red-600"></i>&thinsp;Miguel Tamayo #4583, &thinsp;Culiacán Rosales, Sin.</a>
        <div class="flex flex-col mx-2 item-center w-1/3">
            <p class="self-center">Siguenos:</p>
            <div class="flex justify-around text-xl">
            <a href="https://www.facebook.com/RestauranteJCCiobes"><i class="fa-brands fa-facebook-f p-2"></i></a>
            <a href="https://www.instagram.com/restaurantejcciobes/?hl=en"><i class="fa-brands fa-instagram p-2"></i></a>
            <a href="tel:+526673718251"><i class="fa fa-phone p-2"></i></a>
            </div>
        </div>
    </div>
  </footer>
{#if isOverlayOpen}
  <Modal imageUrl={selectedImage} altText={alternativeText} closeModal={closeModal} hasImage={selectedImage !== null} />
{/if}
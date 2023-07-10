<template>
  <div class="about">
    <h1 id="abouttextstyle">Über uns</h1>
    <div class="image-container">
      <img src="../assets/about.jpg" alt="Flower 1" class="about-image">
      <img src="../assets/about2.png" alt="Flower 2" class="about-image">
    </div>
    <p>
      Herzlich willkommen auf unserer Webseite! Wir sind ein Team von leidenschaftlichen Pflanzenliebhabern, die sich darauf spezialisiert haben, Ihnen die besten Informationen und Ressourcen rund um das Thema Pflanzen zur Verfügung zu stellen. Unser Ziel ist es, Ihnen dabei zu helfen, mehr über verschiedene Pflanzenarten, ihre Pflegeanforderungen und die Schaffung eines blühenden Gartens oder einer beeindruckenden Zimmerpflanzensammlung zu erfahren.
    </p>
    <p>
      Egal, ob Sie Anfänger oder erfahrener Gärtner sind, wir haben wertvolle Tipps, Anleitungen und Artikel, die Sie auf Ihrer Pflanzenreise unterstützen. Wir glauben an die Kraft der Pflanzen, um Schönheit, Gelassenheit und Gesundheit in unser Leben zu bringen, und wir möchten diese Freude mit Ihnen teilen.
    </p>
    <p>
      Erkunden Sie gerne unsere Webseite und entdecken Sie eine Welt voller botanischer Wunder. Wenn Sie Fragen haben oder Unterstützung benötigen, zögern Sie bitte nicht, uns zu kontaktieren. Viel Spaß beim Gärtnern!
    </p>
  </div>
</template>

<style>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap");

.about {
  background-color: #bdb7b7;
  padding: 20px;
  margin: 20px;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.about-image {
  width: 300px;
  height: auto;
  margin: 10px;
}

#abouttextstyle {
  color: #d8fce6;
  font-size: 25px;
  font-weight: bold;
  font-family: "Poppins", sans-serif !important;
}

p {
  color: #333333;
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 10px;
  font-family: "Poppins", sans-serif !important;
}
</style>

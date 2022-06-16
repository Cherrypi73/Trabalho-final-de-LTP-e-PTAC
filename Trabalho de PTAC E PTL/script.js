let jsonURL = "https://www.luizpicolo.com.br/api.json"; 
let XHR = new XMLHttpRequest();
XHR.open("GET", jsonURL);
XHR.responseType = "json";
XHR.send();

XHR.onload = function(){
  let noticias = XHR.response;

  class Noticia {
  constructor(title, description,publishedAt,author,url,urlToImage){
    this.title = title;
    this.description = description;
    this.publishedAt = publishedAt;
    this.author = author;
   this.url = url;
    this.urlToImage= urlToImage;
  }

  mostrarNoticia(){
    return `<div class="container">
<div class="noticia">
             <a class="titulo" href="${this.url}"> 
             <h3>${this.title}</h3></a>
             <h4>${this.publishedAt} <h4> 
             <h4>  ${this.author}</h4>
             <p>${this.description}</p> 

</div>  
</div>
`;
  }
  erro(){
      if(this.url=== this.url && this.url &&this.author===this.author&&this.description===this.description&&this.publishedAt === this.publishedAt ){
        return this.mostrarNoticia();
      } else{
         throw new Noticia( "Noticia indisponível.")
      }
  }
   mostrarErro() {
     try{
       return this.mostrarNoticia();
     } catch(error){
       return this.erro()
     } finally{
       console.log("sucesso")
     }
   }
  }
 class NoticiaDestaque extends Noticia{
  constructor(title, description,publishedAt,author,url,urlToImage){
    super(title, description,publishedAt,author,url,urlToImage)      
  }
   mostrarDestaque(){
   return`  <img  src="${this.urlToImage}"/>  
             <a class="titulo" href="${this.url}"> 
             <p>${this.title}</p></a>
             <p>${this.publishedAt} </p>
             <p>${this.author}</p>
            <p>${this.description}</p> 
         </div>`;
    }
 }
  const local = document.getElementById('destaque');
  let destaque = new NoticiaDestaque(             
noticias.articles[0].title,
noticias.articles[0].description,
noticias.articles[0].publishedAt,
noticias.articles[0].author,
noticias.articles[0].url,
noticias.articles[0].urlToImage    
);
  local.insertAdjacentHTML('afterbegin',destaque .mostrarDestaque());
 const elemento = document.getElementById('lista');
  noticias.articles.forEach(noticia =>{
    let noticia_nova = new Noticia(noticia.title, noticia.description, noticia.publishedAt, noticia.author,noticia.url);
    elemento.insertAdjacentHTML('beforeend', noticia_nova.mostrarNoticia() );
  })
  
};


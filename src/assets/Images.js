
const images = import.meta.glob('../assets/*.{png,jpg}',{eager:true});
console.log("Tog'rimi => ",images);
const supurgi = images['./supurgi.png']?.default;
const kukspurgi = images['./koksupurgi.png']?.default;
const yashil = images['./Yashil_Supurgi.jpg']?.default;
const yelim = images['./Yelim_Supurgi.jpg']?.default;

export default {supurgi, kukspurgi,yashil,yelim};

var area="square";
var PI=3.142,l=5,b=4,r=3;

switch(area){
    case 'circle':
        console.log("circle is:"+ PI*r*2);
        break;
        case 'triangle':
        console.log("triangle is:"+ (l*b)/2);
        break;
        case 'rectangle':
        console.log("rectangle is:"+ (l*b));
        break;
        default:
            console.log("invalid");
}
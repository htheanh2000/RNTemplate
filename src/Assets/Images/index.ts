import eLearningImg from './e-learning.jpg'
import tomImg from './TOM.png'
import firstPageBanner from './bannerSignUp.svg'
import fPage from './FPage1.png'
import arrow from './arrow.png'
import arrowUp from './arrowUp.png'
import avatar from './avatar.png'
import reading from './reading.png'
import listening from './listening.png'
import speaking from './speaking.png'
import grammar from './grammar.png'
import elipse1 from './Elipse1.png'
import elipse2 from './Elipse2.png'
import elipse3 from './Elipse3.png'
import elipse4 from './Elipse4.png'
import fourdot from './fourdots.png'
import rectangle from './Rectangle.png'
import read from './read.png'
import match from './match.png'
import translate from './ph_translate.png'
import Jack from './Jack.png'
import Henry from './Henry.png'
import William from './William.png'
import Jenifer from './Jenifer.png'
import Robert from './Robert.png'
import Serena from './Serena.png'
import Allison from './Allison.png'
import AddFriend from './AddFriend.png'
import back from './back.png'
import close from './close.png'
import filter from './filter.png'
import speaker from './Speaker.png'
import happy from './happy_smiley.png'
import sad from './sad_face.png'

interface IImg {
    [key: string]: any
}
const Images:IImg = {
    eLearning : eLearningImg,
    default: tomImg,
    firstPageBanner: firstPageBanner,
    fPage:fPage,
    arrow: arrow,
    arrowUp: arrowUp,
    avatar: avatar,
    reading: reading,
    listening: listening,
    speaking: speaking,
    grammar: grammar,
    elipse1:elipse1,
    elipse2:elipse2,
    elipse3:elipse3,
    elipse4:elipse4,
    fourdot:fourdot,
    rectangle:rectangle,
    read:read,
    match:match,
    translate:translate,
    Jack:Jack,
    Allison:Allison,
    William:William,
    Jenifer:Jenifer,
    Serena:Serena,
    Robert:Robert,
    Henry:Henry,
    AddFriend:AddFriend,
    back:back,
    close:close,
    filter: filter,
    speaker:speaker,
    happy: happy,
    sad: sad
}


export default Images
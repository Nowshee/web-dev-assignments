import angry from '../emojis/angry.png';
import care from '../emojis/care.jpeg';
import laugh from '../emojis/laugh.png';
import like from '../emojis/like.jpeg';
import love from '../emojis/love.svg';
import sad from '../emojis/sad.png';
import wow from '../emojis/wow.jpeg';

const emotionsObj={
    angry,
    care,
    laugh,
    like,
    love,
    sad,
    wow

};

export default function emoji({type}) {
  return (
      <img src= {emotionsObj[type]} alt="...." width="25px" height="25px"/>  
  );
}

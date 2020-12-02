import React, { useState } from 'react';
import BarChart from './BarChart'
import './PlayStyle.css'
import  "../../firebase"
import { storage } from  "../../firebase";
function ChIDToName(id)
{
    switch(id){
        case 266: return "Aatrox"; break;
case 103: return "Ahri"; break;
case 84: return "Akali"; break;
case 12: return "Alistar"; break;
case 32: return "Amumu"; break;
case 34: return "Anivia"; break;
case 1: return "Annie"; break;
case 523: return "Aphelios"; break;
case 22: return "Ashe"; break;
case 136: return "AurelionSol"; break;
case 268: return "Azir"; break;
case 432: return "Bard"; break;
case 53: return "Blitzcrank"; break;
case 63: return "Brand"; break;
case 201: return "Braum"; break;
case 51: return "Caitlyn"; break;
case 164: return "Camille"; break;
case 69: return "Cassiopeia"; break;
case 31: return "Chogath"; break;
case 42: return "Corki"; break;
case 122: return "Darius"; break;
case 131: return "Diana"; break;
case 119: return "Draven"; break;
case 36: return "DrMundo"; break;
case 245: return "Ekko"; break;
case 60: return "Elise"; break;
case 28: return "Evelynn"; break;
case 81: return "Ezreal"; break;
case 9: return "Fiddlesticks"; break;
case 114: return "Fiora"; break;
case 105: return "Fizz"; break;
case 3: return "Galio"; break;
case 41: return "Gangplank"; break;
case 86: return "Garen"; break;
case 150: return "Gnar"; break;
case 79: return "Gragas"; break;
case 104: return "Graves"; break;
case 120: return "Hecarim"; break;
case 74: return "Heimerdinger"; break;
case 420: return "Illaoi"; break;
case 39: return "Irelia"; break;
case 427: return "Ivern"; break;
case 40: return "Janna"; break;
case 59: return "JarvanIV"; break;
case 24: return "Jax"; break;
case 126: return "Jayce"; break;
case 202: return "Jhin"; break;
case 222: return "Jinx"; break;
case 145: return "Kaisa"; break;
case 429: return "Kalista"; break;
case 43: return "Karma"; break;
case 30: return "Karthus"; break;
case 38: return "Kassadin"; break;
case 55: return "Katarina"; break;
case 10: return "Kayle"; break;
case 141: return "Kayn"; break;
case 85: return "Kennen"; break;
case 121: return "Khazix"; break;
case 203: return "Kindred"; break;
case 240: return "Kled"; break;
case 96: return "KogMaw"; break;
case 7: return "Leblanc"; break;
case 64: return "LeeSin"; break;
case 89: return "Leona"; break;
case 876: return "Lillia"; break;
case 127: return "Lissandra"; break;
case 236: return "Lucian"; break;
case 117: return "Lulu"; break;
case 99: return "Lux"; break;
case 54: return "Malphite"; break;
case 90: return "Malzahar"; break;
case 57: return "Maokai"; break;
case 11: return "MasterYi"; break;
case 21: return "MissFortune"; break;
case 62: return "MonkeyKing"; break;
case 82: return "Mordekaiser"; break;
case 25: return "Morgana"; break;
case 267: return "Nami"; break;
case 75: return "Nasus"; break;
case 111: return "Nautilus"; break;
case 518: return "Neeko"; break;
case 76: return "Nidalee"; break;
case 56: return "Nocturne"; break;
case 20: return "Nunu"; break;
case 2: return "Olaf"; break;
case 61: return "Orianna"; break;
case 516: return "Ornn"; break;
case 80: return "Pantheon"; break;
case 78: return "Poppy"; break;
case 555: return "Pyke"; break;
case 246: return "Qiyana"; break;
case 133: return "Quinn"; break;
case 497: return "Rakan"; break;
case 33: return "Rammus"; break;
case 421: return "RekSai"; break;
case 58: return "Renekton"; break;
case 107: return "Rengar"; break;
case 92: return "Riven"; break;
case 68: return "Rumble"; break;
case 13: return "Ryze"; break;
case 360: return "Samira"; break;
case 113: return "Sejuani"; break;
case 235: return "Senna"; break;
case 147: return "Seraphine"; break;
case 875: return "Sett"; break;
case 35: return "Shaco"; break;
case 98: return "Shen"; break;
case 102: return "Shyvana"; break;
case 27: return "Singed"; break;
case 14: return "Sion"; break;
case 15: return "Sivir"; break;
case 72: return "Skarner"; break;
case 37: return "Sona"; break;
case 16: return "Soraka"; break;
case 50: return "Swain"; break;
case 517: return "Sylas"; break;
case 134: return "Syndra"; break;
case 223: return "TahmKench"; break;
case 163: return "Taliyah"; break;
case 91: return "Talon"; break;
case 44: return "Taric"; break;
case 17: return "Teemo"; break;
case 412: return "Thresh"; break;
case 18: return "Tristana"; break;
case 48: return "Trundle"; break;
case 23: return "Tryndamere"; break;
case 4: return "TwistedFate"; break;
case 29: return "Twitch"; break;
case 77: return "Udyr"; break;
case 6: return "Urgot"; break;
case 110: return "Varus"; break;
case 67: return "Vayne"; break;
case 45: return "Veigar"; break;
case 161: return "Velkoz"; break;
case 254: return "Vi"; break;
case 112: return "Viktor"; break;
case 8: return "Vladimir"; break;
case 106: return "Volibear"; break;
case 19: return "Warwick"; break;
case 498: return "Xayah"; break;
case 101: return "Xerath"; break;
case 5: return "XinZhao"; break;
case 157: return "Yasuo"; break;
case 777: return "Yone"; break;
case 83: return "Yorick"; break;
case 350: return "Yuumi"; break;
case 154: return "Zac"; break;
case 238: return "Zed"; break;
case 115: return "Ziggs"; break;
case 26: return "Zilean"; break;
case 142: return "Zoe"; break;
case 143: return "Zyra"; break;
    }
}

const PlayStyle = () =>{
    const [rec_champ1,setrec_champ1]=useState(null);
    const [rec_champ2,setrec_champ2]=useState(null);
    const [rec_champ3,setrec_champ3]=useState(null);

    const [cou_champ1,setcou_champ1]=useState(null);
    const [cou_champ2,setcou_champ2]=useState(null);
    const [cou_champ3,setcou_champ3]=useState(null);
   
    var playstyle = "무난형";
    var data = {'공격': 2, '시야': 2, '군중제어': 2, '성장': 3};
    var explain = ['받은 피해량이 적은 것으로 보아 상대방과의 딜교환에서 많은 이득을 보았습니다.', 
    '상대에가 준 피해량이 보통입니다.'];
    var todo =  ['와드를 좀 더 많이 설치해 갱킹에 당하지 않도록 조심하세요.',
    '피해량을 올리기 위해 공격적으로 플레이 해보세요.'];

    var recommend = [42, 131, 201];

    var ChampionURL1 =  storage.ref().child('Champion/'+String(ChIDToName(recommend[0]))+'.png').getDownloadURL();
    ChampionURL1.then(resolve=>{
        setrec_champ1(resolve);
    }); 
    var ChampionURL2 =  storage.ref().child('Champion/'+String(ChIDToName(recommend[1]))+'.png').getDownloadURL();
    ChampionURL2.then(resolve=>{
        setrec_champ2(resolve);
    }); 
    var ChampionURL3 =  storage.ref().child('Champion/'+String(ChIDToName(recommend[2]))+'.png').getDownloadURL();
    ChampionURL3.then(resolve=>{
        setrec_champ3(resolve);
    }); 

    var counter = [51, 1, 12];
    var ChampionURL1 =  storage.ref().child('Champion/'+String(ChIDToName(counter[0]))+'.png').getDownloadURL();
    ChampionURL1.then(resolve=>{
        setcou_champ1(resolve);
    }); 
    var ChampionURL2 =  storage.ref().child('Champion/'+String(ChIDToName(counter[1]))+'.png').getDownloadURL();
    ChampionURL2.then(resolve=>{
        setcou_champ2(resolve);
    }); 
    var ChampionURL3 =  storage.ref().child('Champion/'+String(ChIDToName(counter[2]))+'.png').getDownloadURL();
    ChampionURL3.then(resolve=>{
        setcou_champ3(resolve);
    }); 

    return (
        <div className = "PlayStyle_Container">
            <div className = "playstyle">"{playstyle}"</div>
            <div className = "barChart">
                <BarChart data = {data}/></div>
            <div className = "explain">
                <div className = "설명공략추천카운터">&nbsp;설명</div>
                <div className = "explain_box">
                    {explain.map(x=><div className="explain_content">{x}</div>)}
                </div>
            </div>
            <div className = "explain">
                <div className = "설명공략추천카운터">&nbsp;공략</div>
                <div className = "explain_box">
                    {todo.map(x=><div className="explain_content">{x}</div>)}
                </div>
            </div>
            <div className = "recommend">
                <div className = "설명공략추천카운터">&nbsp;추천</div>

                <div className = "champ_container">
                    <div className="chmp_info">
                        <img src = {rec_champ1} className = "champImg"/>
                        <div>{ChIDToName(recommend[0])}</div>
                    </div>
            
                    <div className="chmp_info">
                        <img src = {rec_champ2} className = "champImg"/>
                        <div>{ChIDToName(recommend[1])}</div>
                    </div>
                
                    <div className="chmp_info">
                        <img src = {rec_champ3} className = "champImg"/>
                        <div>{ChIDToName(recommend[2])}</div>
                    </div>
                </div>
            </div>
            <div className = "recommend">
                <div className = "설명공략추천카운터">카운터</div>
                <div className = "champ_container">
                    <div className="chmp_info">
                        <img src = {cou_champ1} className = "champImg"/>
                        <div>{ChIDToName(counter[0])}</div>
                    </div>
            
                    <div className="chmp_info">
                        <img src = {cou_champ2} className = "champImg"/>
                        <div>{ChIDToName(counter[1])}</div>
                    </div>
                
                    <div className="chmp_info">
                        <img src = {cou_champ3} className = "champImg"/>
                        <div>{ChIDToName(counter[2])}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PlayStyle;
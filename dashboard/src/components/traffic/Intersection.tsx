import type {Lane} from '../../types/traffic'
const colors={verde:'#36d77a',amarillo:'#f4c542',rojo:'#fa5252'}
export default function Intersection({lanes,demand,running}:{lanes:Lane[];demand:number[];running:boolean}){
 const corners=[[12,12],[336,12],[12,336],[336,336]]
 const locations=[[165,145],[335,355],[355,165],[145,335]]
 return <svg viewBox="0 0 500 500" role="img" aria-label="Intersección simulada de cuatro vías" className="st-map">
 <rect width="500" height="500" rx="8" fill="#e4e8dc"/>
 {corners.map(([x,y],i)=><g key={i} transform={'translate('+x+' '+y+')'}><rect width="152" height="152" rx="9" fill="#ccd8c4"/><rect x="12" y="12" width="128" height="128" rx="7" fill="#dce4d3" stroke="#b6c5af"/><rect x="21" y="24" width="62" height="55" rx="3" fill={i%2?'#c5ada0':'#ede3ce'} stroke="#aa9d8b"/><path d="M21 24L52 10L83 24" fill={i%2?'#917b70':'#b99172'}/><rect x="24" y="93" width="56" height="32" rx="3" fill="#bac1b6"/>{[[111,33],[114,79],[112,119]].map(([a,b],j)=><g key={j}><circle cx={a+2} cy={b+3} r="13" fill="#a6b49b"/><circle cx={a} cy={b} r="12" fill={j%2?'#85a57b':'#72956d'}/></g>)}<path d="M88 15V136" stroke="#f2eee2" strokeWidth="5"/></g>)}
 <path d="M176 0H324V500H176Z M0 176H500V324H0Z" fill="#555e64"/><path d="M176 0V176H0 M324 0V176H500 M0 324H176V500 M500 324H324V500" fill="none" stroke="#f7f2e6" strokeWidth="4"/><path d="M250 0V176M250 324V500M0 250H176M324 250H500" stroke="#e9d7a3" strokeWidth="2" strokeDasharray="12 9"/>
 {Array.from({length:10},(_,i)=><g key={i} fill="#f5f4e9"><rect x={182+i*14} y="159" width="8" height="12"/><rect x={182+i*14} y="329" width="8" height="12"/><rect x="159" y={182+i*14} width="12" height="8"/><rect x="329" y={182+i*14} width="12" height="8"/></g>)}
 {lanes.map((lane,i)=><g key={lane.direction}>{Array.from({length:Math.min(demand[i],5)},(_,j)=>{
 const x=i===0?213:i===1?287:i===2?371+j*25:129-j*25
 const y=i===0?129-j*25:i===1?371+j*25:i===2?213:287
 return <g key={j} transform={'translate('+x+' '+y+') rotate('+[0,180,90,-90][i]+')'}><g className={running&&lane.signal==='verde'?'st-car-moving':''}><rect x="-9" y="-14" width="18" height="28" rx="5" fill={['#a23d53','#d6b475','#a8c0d0','#f0eee4'][j%4]} stroke="#30383d"/><rect x="-6" y="1" width="12" height="8" rx="2" fill="#34434c"/></g></g>})}<g transform={'translate('+locations[i][0]+' '+locations[i][1]+')'}><rect x="-10" y="-22" width="20" height="44" rx="5" fill="#20262d"/>{(['rojo','amarillo','verde'] as const).map((s,j)=><circle key={s} cy={-13+j*13} r="5" fill={lane.signal===s?colors[s]:'#53565a'}/>)}<circle cx={i%2===0?-20:20} cy="0" r="5" fill={lane.detected?'#f4c542':'#9aa5a9'} className={lane.detected&&running?'st-sensor':''}/></g></g>)}
 <g fill="#fff" fontSize="13" fontWeight="700" textAnchor="middle"><text x="250" y="17">N</text><text x="250" y="492">S</text><text x="12" y="241">O</text><text x="488" y="241">E</text></g></svg>
}

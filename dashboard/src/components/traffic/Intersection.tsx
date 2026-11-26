import type { Lane } from '../../types/traffic'
const colors = { verde: '#36d77a', amarillo: '#f4c542', rojo: '#fa5252' }
function Tree({x,y}:{x:number;y:number}) {
 return <g transform={'translate('+x+' '+y+')'}><circle cx="3" cy="4" r="12" fill="#304b3830"/><circle r="11" fill="#63846b"/><circle cx="-3" cy="-3" r="7" fill="#87a283"/></g>
}
function Building({x,y,w,h,color}:{x:number;y:number;w:number;h:number;color:string}) {
 return <g transform={'translate('+x+' '+y+')'}><rect x="5" y="6" width={w} height={h} rx="2" fill="#243b3b25"/><rect width={w} height={h} rx="2" fill={color} stroke="#9c9385"/><rect x="5" y="5" width={w-10} height={h-10} fill="none" stroke="#fff8" strokeWidth="2"/><rect x={w/2-7} y={h/2-5} width="14" height="10" fill="#a5a49b"/></g>
}
export default function Intersection({lanes,demand,running}:{lanes:Lane[];demand:number[];running:boolean}) {
 return <svg viewBox="0 0 640 480" role="img" aria-label="Mapa urbano ilustrado; estados simulados de cuatro semáforos" className="st-map">
 <defs><pattern id="pavers" width="9" height="9" patternUnits="userSpaceOnUse"><path d="M0 0H9V9" fill="none" stroke="#c8c6ba" strokeWidth=".5"/></pattern></defs>
 <rect width="640" height="480" fill="#d8d7c8"/>
 <g fill="url(#pavers)"><rect x="0" y="0" width="230" height="150"/><rect x="410" y="0" width="230" height="150"/><rect x="0" y="330" width="230" height="150"/><rect x="410" y="330" width="230" height="150"/></g>
 <rect x="12" y="12" width="198" height="120" rx="5" fill="#c1d0b5"/>
 <path d="M20 72H201M105 20V123" stroke="#eee9d8" strokeWidth="12"/>
 <circle cx="105" cy="72" r="23" fill="#eee9d8"/><circle cx="105" cy="72" r="15" fill="#8bb9c0" stroke="#fff" strokeWidth="3"/>
 {[[34,34],[66,36],[150,35],[180,39],[33,108],[173,106]].map(([x,y])=><Tree key={x+','+y} x={x} y={y}/>)}
 <Building x={427} y={17} w={85} h={72} color="#c1a38b"/><Building x={526} y={17} w={97} h={100} color="#eee2c9"/>
 <rect x="429" y="101" width="84" height="26" fill="#adb1a7"/><path d="M444 101V127M461 101V127M478 101V127M495 101V127" stroke="#f7f3e7"/>
 <Building x={18} y={355} w={78} h={97} color="#d6b89e"/><Building x={111} y={367} w={94} h={78} color="#e8e2cb"/>
 <Tree x={104} y={345}/><Tree x={211} y={457}/><Tree x={20} y={467}/>
 <rect x="426" y="344" width="200" height="122" rx="4" fill="#a8b3a2"/>
 <rect x="442" y="359" width="115" height="90" rx="3" fill="#809b79" stroke="#f1eee0" strokeWidth="2"/>
 <path d="M499 359V449" stroke="#f1eee0"/><circle cx="499" cy="404" r="14" fill="none" stroke="#f1eee0"/>
 <rect x="447" y="387" width="15" height="34" fill="none" stroke="#f1eee0"/><rect x="537" y="387" width="15" height="34" fill="none" stroke="#f1eee0"/>
 <Tree x={588} y={365}/><Tree x={604} y={432}/>
 <path d="M240 0H400V480H240Z M0 160H640V320H0Z" fill="#424c53"/>
 <path d="M320 0V160M320 320V480M0 240H240M400 240H640" stroke="#e5cc86" strokeWidth="2" strokeDasharray="10 8"/>
 <path d="M240 0V160H0M400 0V160H640M0 320H240V480M640 320H400V480" stroke="#f1eee0" strokeWidth="3" fill="none"/>
 {Array.from({length:10},(_,i)=><g key={i} fill="#f1eee0"><rect x={246+i*15} y="163" width="8" height="13"/><rect x={246+i*15} y="304" width="8" height="13"/><rect x="243" y={166+i*15} width="13" height="8"/><rect x="384" y={166+i*15} width="13" height="8"/></g>)}
 <g fill="none" stroke="#fff" strokeWidth="2" opacity=".6"><path d="M280 127V104l-7 8m7-8 7 8M360 353v23l-7-8m7 8 7-8M205 280h-23l8-7m-8 7 8 7M435 200h23l-8-7m8 7-8 7"/></g>
 {lanes.map((lane,i)=><g key={lane.direction}>
 {Array.from({length:Math.min(demand[i],4)},(_,j)=>{
 const x=i===0?360:i===1?280:i===2?453+j*36:187-j*36
 const y=i===0?128-j*32:i===1?352+j*32:i===2?200:280
 return <g key={j} transform={'translate('+x+' '+y+') rotate('+[0,180,90,-90][i]+')'}><g className={running&&lane.signal==='verde'?'st-car-moving':''} style={{animationDelay:(-j*.28)+'s'}}><rect x="-10" y="-15" width="20" height="30" rx="5" fill="#17252d66" transform="translate(2 3)"/><rect x="-10" y="-15" width="20" height="30" rx="5" fill={['#b44d59','#d9b977','#8cb0c4','#f2ede1'][j%4]} stroke="#28343c"/><path d="M-7 -8H7L6 -2H-6Z M-6 5H6L7 10H-7Z" fill="#34434c"/><path d="M-7 13h4m6 0h4" stroke="#fff0bb" strokeWidth="2"/></g></g>
 })}
 <g transform={'translate('+[224,416,416,224][i]+' '+[135,345,145,335][i]+')'}><rect x="-10" y="-22" width="20" height="44" rx="4" fill="#20262d"/>{(['rojo','amarillo','verde'] as const).map((s,j)=><circle key={s} cy={-13+j*13} r="5" fill={lane.signal===s?colors[s]:'#53565a'}/>)}<circle cx={i%2===0?-19:19} r="5" fill={lane.detected?'#f4c542':'#9aa5a9'} className={lane.detected&&running?'st-sensor':''}/></g>
 </g>)}
 <g fontSize="10" fontWeight="700" letterSpacing="1.2" fill="#4e6252"><text x="22" y="145">PARQUE CENTRAL</text><text x="427" y="145">ZONA COMERCIAL</text><text x="20" y="342">BARRIO RESIDENCIAL</text><text x="426" y="338">ÁREA DEPORTIVA</text></g>
 <g fill="#fff" fontSize="13" fontWeight="700" textAnchor="middle"><text x="320" y="17">N</text><text x="320" y="473">S</text><text x="12" y="233">O</text><text x="628" y="233">E</text></g>
 </svg>
}

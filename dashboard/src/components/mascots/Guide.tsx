import {useState} from 'react'
import type {Scenario} from '../../types/traffic'
export default function Guide({scenario,running,description}:{scenario:Scenario;running:boolean;description:string}){
 const [answer,setAnswer]=useState<string|null>(null)
 const pose=!running?'pensando':scenario==='congestion'?'preocupado':scenario==='punta'?'explicando':'celebrando'
 const correct=scenario==='congestion'?'Este–Oeste':scenario==='punta'?'Norte–Sur':'Ambos por igual'
 return <section className="lab-guide"><div className="lab-guide-main"><img src={import.meta.env.BASE_URL+'macotas/telequito/'+pose+'.png'} alt="Telequito"/><div><span className="lab-kicker">01 / TELEQUITO EXPLICA</span><h2>¿Por qué cambia el semáforo?</h2><p>{description}</p></div></div><div className="lab-quiz"><img src={import.meta.env.BASE_URL+'macotas/telequita/'+(answer===correct?'celebrando':answer?'preocupada':'pensando')+'.png'} alt="Telequita"/><div><span className="lab-kicker">02 / RETO DE TELEQUITA</span><h3>¿Qué eje necesita más tiempo en verde?</h3><div className="lab-options">{['Norte–Sur','Este–Oeste','Ambos por igual'].map(a=><button key={a} onClick={()=>setAnswer(a)} aria-pressed={answer===a}>{a}</button>)}</div>{answer&&<p role="status">{answer===correct?'¡Correcto! La demanda orienta la duración del verde.':'Intenta otra vez: compara la demanda de las cuatro vías.'}</p>}</div></div></section>
}

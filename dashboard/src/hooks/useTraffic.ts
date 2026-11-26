import {useEffect,useState} from 'react'
import {directions} from '../types/traffic'
import type {Lane,Scenario} from '../types/traffic'
export const scenarios={normal:{label:'Tráfico normal',demand:[2,2,2,2]},punta:{label:'Hora punta',demand:[5,4,2,1]},congestion:{label:'Congestión E–O',demand:[1,2,6,5]}}
export function useTraffic(){
 const [scenario,setScenario]=useState<Scenario>('normal')
 const [running,setRunning]=useState(true)
 const [tick,setTick]=useState(0)
 useEffect(()=>{if(!running)return;const id=window.setInterval(()=>setTick(t=>t+1),1000);return()=>window.clearInterval(id)},[running])
 const demand=scenarios[scenario].demand
 const ns=scenario==='punta'?14:scenario==='congestion'?8:10
 const eo=scenario==='congestion'?14:scenario==='punta'?8:10
 const ends=[ns,ns+3,ns+4,ns+4+eo,ns+7+eo,ns+8+eo]
 const t=tick%ends[5],phase=ends.findIndex(e=>t<e)
 const lanes:Lane[]=directions.map((direction,i)=>({direction,count:Math.floor((tick+i)/(7-demand[i])),detected:(tick+i)%(7-demand[i])===0,signal:i<2?phase===0?'verde':phase===1?'amarillo':'rojo':phase===3?'verde':phase===4?'amarillo':'rojo'}))
 const events: { time: number; message: string }[] = []
 const phaseMessages=['Paso habilitado Norte–Sur','Norte–Sur: transición a amarillo','Rojo en las cuatro vías','Paso habilitado Este–Oeste','Este–Oeste: transición a amarillo','Rojo en las cuatro vías']
 for(let second=tick;second>=Math.max(0,tick-60)&&events.length<8;second--){
   const elapsed=second%ends[5]
   const index=ends.findIndex(e=>elapsed<e)
   if(elapsed===(index===0?0:ends[index-1])) events.push({time:second,message:phaseMessages[index]})
   if(second>0){
     const detected=directions.filter((_,i)=>(second+i)%(7-demand[i])===0)
     if(detected.length)events.push({time:second,message:'Detección virtual: '+detected.join(', ')})
   }
   if(second===0)events.push({time:0,message:'Inicio: '+scenarios[scenario].label})
 }
 return {events:events.slice(0,8),scenario,chooseScenario:(s:Scenario)=>{setScenario(s);setTick(0)},running,setRunning,tick,lanes,remaining:ends[phase]-t,demand}
}

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
 return {scenario,chooseScenario:(s:Scenario)=>{setScenario(s);setTick(0)},running,setRunning,tick,lanes,remaining:ends[phase]-t,demand}
}

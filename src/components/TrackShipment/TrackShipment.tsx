import {useParams,useNavigate} from 'react-router-dom';
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import {ExclamationTriangleIcon} from "@heroicons/react/24/solid";
import { useState,useEffect } from "react";

function TrackShipment ()  {
  const [id,setId] = useState<any>();
  const params = useParams();
  const navigate  = useNavigate();
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>(false);
  const [loading, setLoading] = useState<boolean>(false);
  function handleClick(e:any): void{
    e.preventDefault();
    setId('');
    navigate(`/search/${id}`);
  }
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const response = await fetch(`https://tracking.bosta.co/shipments/track/${params.id}`);
      if(response.ok){
      setLoading(false);
      const data = await response.json();
      setData(data);
      setError(false);
    }else{
      setLoading(false);
      setError(true);
    }
    } 
    getData();
  }, [params.id])
  function getDayDiff(startDate: Date, endDate: Date): number {
    const msInDay = 24 * 60 * 60 * 1000;
  
    return Math.round(
      Math.abs(Number(endDate) - Number(startDate)) / msInDay
    );
  }
  return (
    <div className='flex flex-col justify-center items-center'>
       <div className="flex flex-col justify-start items-center p-10 mb-5">
        <h3 className="mb-3">Track your shipment</h3>
        <div className="flex flex-row justify-start items-start">
          <input type="search" placeholder="Tracking No." className="sm:w-72 h-14 w-96 border-2 rounded-tl-lg rounded-bl-lg p-2" value={id} onChange={(e)=> setId(e.target.value)}/>
          <button className="p-2 bg-[#e30613] rounded-tr-lg rounded-br-lg" onClick={(e)=> handleClick(e)}><MagnifyingGlassIcon className="w-8 h-10 text-center text-white"/></button>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center w-full'>
        <p className='mb-6 sm:hidden'>Shipment No. {params.id}</p>
        <div className="flex flex-col justify-center items-center w-full">
        {(!loading && error) && <div className='p-4 bg-[#fef3f2] border border-[#fecdca] w-1/2 text-sm flex flex-row mb-10 sm:w-11/12'><ExclamationTriangleIcon className="w-6 h-6 text-red-700  mr-3"/><span className='inline-block'>No record of this tracking number can be found at this time, please check the number and try again later. For further assistance, please contact Customer Service.</span></div>}  
        {(!loading && !error) && (
          <>
        <div className='flex flex-col justify-center items-center md:w-9/12 sm:w-11/12 w-1/2 border-b border-b-slate-400' >
          <h2 className='text-[#111619] text-4xl mb-4 font-poppinsSemiBold'>{data?.CurrentStatus?.state ==="DELIVERED" ? data?.CurrentStatus?.state:<p>Returned</p>}</h2>
          <div className='flex flex-row justify-center items-center w-full'>
          <div className="w-full rounded-full bg-gray-200 h-1.5 dark:bg-gray-700 mr-2" >
          <div className="bg-[#0098a5] h-1.5 rounded-full w-full mr-2"></div>
          </div>
          <div className="w-full rounded-full bg-gray-200 h-1.5 dark:bg-gray-700 mr-2">
          <div className="bg-[#0098a5] h-1.5 rounded-full w-full "></div>
          </div>
          <div className="w-full rounded-full bg-gray-200 h-1.5 dark:bg-gray-700">
          <div className={`bg-[#0098a5] h-1.5 rounded-full ${data?.CurrentStatus?.state === 'DELIVERED'?"w-full":"w-0"}`}></div>
          </div>
          </div>
          <h3 className='text-[#111619] text-base font-latoBold pt-10 sm:border-b'>{data?.CurrentStatus?.state ==='DELIVERED'?(
            <div className='flex flex-row md:flex-col md:text-sm md:mb-2'>
            Your shipper requested a pickup. Bosta will pick it up soon
            <p className='text-[#0098a5] ml-4 text-sm md:text-center md:mt-2'>{new Date(data?.CurrentStatus?.timestamp).toLocaleDateString('en-GB', { weekday:"long", month:"long", day:"numeric"}) + ' ' + new Date(data?.CurrentStatus?.timestamp).getFullYear()}</p>
            </div>
            ):(
            <div className='flex flex-row md:flex-col md:text-sm md:mb-2'>
              Order is canceled and it will be returned back to the shipper
              <p className='text-[#0098a5] ml-4 text-sm md:text-center md:mt-2'>{new Date(data?.CurrentStatus?.timestamp).toLocaleDateString('en-GB', { weekday:"long", month:"long", day:"numeric"}) + ' ' + new Date(data?.CurrentStatus?.timestamp).getFullYear()}</p>
              </div>
            )}</h3>
          <p className='sm:block hidden mt-3'>Shipment No. {params.id}</p>  
          <p className='text-[#667085] text-xs font-latoBold pb-10 pt-1 text-center'>(Last update since {getDayDiff(new Date(),new Date(`${data?.CurrentStatus?.timestamp}`))} day ago.)</p>
        </div>
        <div className="flex flex-col justify-start items-start w-full md:pl-4 pl-64 pt-3 mb-6">
          <p className='text-[#667085] text-sm'>ACTIVITY LOG</p>
          <div className="border-l p-6 mt-4">
            <span className="text-[#111619] text-base">{new Date(data?.CurrentStatus?.timestamp).toLocaleDateString('en-GB', { weekday:"long", month:"long", day:"numeric"})}</span>
            <div className='p-4 shadow-lg border rounded-md flex flex-col mt-3'>
            <p className='text-[#111619] text-sm'>{data?.CurrentStatus?.state ==='DELIVERED'?"Your shipper requested a pickup. Bosta will pick it up soon":"Order is canceled and it will be returned back to the shipper"}</p>
            <p className="text-[#667085] text-sm">{`${new Date(`${data?.CurrentStatus?.timestamp}`).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`}</p>
            </div>
          </div>
        </div>
        </>
        )}
        {loading && <p>Loading...</p>}
      </div>
      </div>
    </div>
  )
}

export default TrackShipment;
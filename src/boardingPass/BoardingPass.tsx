import { addDays, format } from 'date-fns'
import boardingPassQrCode from '../assets/boarding-pass.png'
import oceanicLogo from '../assets/oceanic.svg'

const dateOfFlight = format(addDays(new Date(), 1), "dMMM")

const BoardingPass = () => (
  <div className='flex flex-col items-center px-14 py-8 rounded-2xl bg-white drop-shadow-lg mx-2'>
    <BoardingPassHeader />
    <BoardingPassContent />
  </div>
)

const BoardingPassHeader = () => (
  <img src={oceanicLogo} className="w-24" alt="Oceanic Airways logo" />
)

const BoardingPassContent = () => {
  return (
    <div>
      <p className='mb-4 mt-10 text-xs text-slate-400'>Passenger Name: James Bond</p>
      <Journey />
      <Itenerary />
      <QRCode />
      <FlightDetail />
    </div>
  )
}

const Journey = () => (
  <div className='flex justify-between mb-8 items-center'>
    <Location fullAirportName='Zürich' iataAirportCode='ZRH' />
    <p className='text-3xl'>✈</p>
    <Location fullAirportName='Manila' iataAirportCode='MNL' />
  </div>
)

type LocationProps = {
  iataAirportCode: string,
  fullAirportName: string
}
const Location = ({ iataAirportCode, fullAirportName }: LocationProps) => (
  <div className='flex flex-col items-start'>
    <p className='text-sm'>{fullAirportName}</p>
    <p className='text-4xl font-bold'>{iataAirportCode}</p>
  </div>
)

const Itenerary = () => (
  <div className='flex justify-between mb-8'>
    <FieldWithDescription description='Filght No.' field='OC356' />
    <FieldWithDescription description='Boarding' field='11:20' />
    <FieldWithDescription description='Date' field={dateOfFlight} />
  </div>
)

type FieldWithDescriptionProps = {
  description: string,
  field: string,
  highlight?: boolean
}

const FieldWithDescription = ({ description, field, highlight = false }: FieldWithDescriptionProps) => {
  const highlightedClass = highlight ? ' text-red-400' : ''
  return (<div className='flex flex-col items-start'>
    <p className={'text-xs' + highlightedClass}>{description}</p>
    <p className={'text-2xl' + highlightedClass}>{field}</p>
  </div>)
}

const QRCode = () => {
  //const url = "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=OC345.Today.MrJamesBond.OCA144587"
  return (
    <div className='flex flex-col border-2 p-6 pb-2 mb-8'>
      <img className='w-64' src={boardingPassQrCode} alt='Boarding Pass QR Code'></img>
      <p className='mt-4 text-xs text-slate-400'>OC345.{dateOfFlight}.OCA144587</p>
    </div>
  )
}

const FlightDetail = () => (
  <div className='flex justify-between mb-4'>
    <FieldWithDescription description='Class' field='Eco' />
    <FieldWithDescription description='Gate' field='-' highlight={true} />
    <FieldWithDescription description='Seat' field='31B' />
  </div>
)

export default BoardingPass
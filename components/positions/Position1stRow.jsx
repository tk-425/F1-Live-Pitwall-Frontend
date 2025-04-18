import Image from 'next/image';
import DriverBadge from '../icons/drivers/DriverBadge';
import { drivers } from '@/info/Info_drivers';
import { constructorIcons } from '@/info/utils/constructorIcons';
import { teamIconFit } from '@/style/style';
import { useWebSocketContext } from '@/context/WebSocketContext';
import { getInterval } from '@/utils/util_interval';
import PositionNumberIcon from '../icons/position/PositionNumberIcon';

export default function Position1stRow({ position, startIndex, index }) {
  const { allIntervals } = useWebSocketContext();

  return (
    <div className='flex items-center text-sm mx-2 px-4'>
      <PositionNumberIcon
        position={startIndex + index + 1}
      />

      <Image
        src={constructorIcons[drivers[position.driver_number].constructor]}
        width={30}
        height={30}
        className={`${teamIconFit} mx-4`}
        alt={`drivers[position.driver_number].constructor || 'team-icon`}
      />

      <DriverBadge
        initial={drivers[position.driver_number]?.initial}
        driverNumber={position.driver_number}
        teamColor={drivers[position.driver_number]?.teamColor}
        height={36}
        className='ml-2'
      />

      <div className='ml-4 hidden md:block'>
        <span className='font-bold'>Interval:</span>
        <span className='ml-2'>
          {getInterval(allIntervals, position.driver_number)}
        </span>
      </div>
    </div>
  );
}

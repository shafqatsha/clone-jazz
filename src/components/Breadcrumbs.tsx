import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Breadcrumbs = () => (
    <>
        <div className='mt-3 text-center font-bold text-sm'>
            <p>
                Get your Tax Certificate for the year 2022-2023 from Jazz World.
            </p>
        </div>
        <div className='mt-3 flex gap-2 items-center'>
            Home  <FontAwesomeIcon icon={['fas', 'greater-than']} size='sm' /> Prepaid
        </div>
    </>
)

export default Breadcrumbs;
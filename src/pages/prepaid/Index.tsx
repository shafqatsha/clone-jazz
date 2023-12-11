import { ChangeEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { amountAdded } from "../../features/counter/counter-slice";
import CategoriesHorizontalComponent from "../../components/CategoriesHorizontalComponent";

interface ICategories {
    text: string,
    isActive: false,
    img: string,
}
const Index = () => {
    const count = useAppSelector(state => state.counter.value);
    const dispatch = useAppDispatch();
    function handleClick() {
        dispatch(amountAdded(3));
    }
    const [categories] = useState<Array<ICategories>>([
        {
            "text": "All",
            isActive: false,
            img: "/src/assets/imgs/cat-icon-3.png",
        },
        {
            "text": "Data",
            isActive: false,
            img: "/src/assets/imgs/cat-icon-3.png",
        },
        {
            "text": "All in one offers",
            isActive: false,
            img: "/src/assets/imgs/cat-icon-3.png",
        },
        {
            "text": "Location Based Offers",
            isActive: false,
            img: "/src/assets/imgs/cat-icon-3.png",
        },
        {
            "text": "Products & Services",
            isActive: false,
            img: "/src/assets/imgs/cat-icon-3.png",
        },
        {
            "text": "International Services",
            isActive: false,
            img: "/src/assets/imgs/cat-icon-3.png",
        },
        {
            "text": "Other Offers",
            isActive: false,
            img: "/src/assets/imgs/cat-icon-3.png",
        },
        {
            "text": "Just For You",
            isActive: false,
            img: "/src/assets/imgs/cat-icon-3.png",
        }
    ])
    const [filters, setFilters] = useState({
        isActive: false,
        duration: "",
        data: "",
        jazzMinutes: "",
        otherNetworkMinutes: "",
        sms: "",
        price: "",
    })

    function onFilterClick() {
        const _filters = {
            ...filters
        }
        _filters.isActive = !_filters.isActive;
        setFilters(_filters);
    }

    function onFilterChange(e: ChangeEvent<HTMLSelectElement>, type: string) {
        const _filters = {
            ...filters
        }
        if (type == 'duration')
            _filters.duration = e.target.value;
        if (type == 'data')
            _filters.data = e.target.value;
        if (type == 'jazzMinutes')
            _filters.jazzMinutes = e.target.value;
        if (type == 'otherNetworkMinutes')
            _filters.otherNetworkMinutes = e.target.value;
        if (type == 'price')
            _filters.price = e.target.value;
        if (type == 'sms')
            _filters.sms = e.target.value;
        setFilters(_filters)
    }
    return (
        <>
            <div className=''>
                <div className='columns-2 '>
                    <div className="mt-10">
                        <h1 className='text-[4.375rem] font-bold text-red-500'>
                            <p> PREPAID </p>
                        </h1>
                    </div>

                    <div className="flex justify-center">
                        <img src="/src/assets/imgs/Prepaid-new-2.png" />
                    </div>

                </div>
            </div>

            <CategoriesHorizontalComponent categories={categories} />

            <div className="py-5">
                <div className="flex justify-end items-center">
                    <button type="button" className="flex gap-2 items-center text-[0.725rem] font-bold" onClick={onFilterClick}>
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            width="25px" height="25px" viewBox="0 0 100 80" enableBackground="new 0 0 100 80" xmlSpace="preserve">
                            <g>
                                <path fill={`${filters.isActive ? 'rgb(239,68,68 )' : '#727375'}`} d="M65.236,60.562c0,0.343-0.278,0.621-0.621,0.621H35.384c-0.343,0-0.621-0.278-0.621-0.621V54.67
		c0-0.343,0.278-0.621,0.621-0.621h29.232c0.343,0,0.621,0.278,0.621,0.621C65.236,54.67,65.236,60.562,65.236,60.562z"/>
                                <path fill={`${filters.isActive ? 'rgb(239,68,68 )' : '#727375'}`} d="M77.637,42.946c0,0.343-0.278,0.621-0.621,0.621H22.983c-0.343,0-0.621-0.278-0.621-0.621v-5.892
		c0-0.343,0.278-0.621,0.621-0.621h54.033c0.343,0,0.621,0.278,0.621,0.621V42.946z"/>
                                <path fill={`${filters.isActive ? 'rgb(239,68,68 )' : '#727375'}`} d="M89.574,25.33c0,0.343-0.278,0.621-0.621,0.621H11.046c-0.343,0-0.621-0.278-0.621-0.621v-5.892
		c0-0.343,0.278-0.621,0.621-0.621h77.909c0.343,0,0.621,0.278,0.621,0.621L89.574,25.33L89.574,25.33z"/>
                            </g>
                        </svg>
                        <span className={`${filters.isActive ? 'text-red-500' : ''}`}>
                            MORE FILTERS
                        </span>
                    </button>
                </div>

                <div
                    style={{ display: `${filters.isActive ? 'block' : 'none'}` }}
                    className="mx-3 mt-3 transition-transform duration-700 ">
                    <div className="grid grid-cols-6 gap-8 justify-center">
                        <select value={filters.duration} onChange={(e) => onFilterChange(e, 'duration')} className=" text-sm  border border-[#727375] rounded-[4px] p-1" name="select1" id="selectid1">
                            <option value="Duration">Duration</option>
                            <option value="Hourly">Hourly</option>
                            <option value="Daily">Daily</option>
                            <option value="3 Day">3 Day</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Monthly">Monthly</option>
                        </select>

                        <select value={filters.data} onChange={(e) => onFilterChange(e, 'data')} className=" text-sm  border border-[#727375] rounded-[4px] p-1" name="select1" id="selectid1">
                            <option value="Duration">Data (MB)</option>
                            <option value="0-1000">0-1000</option>
                            <option value="1000-3000">1000-3000</option>
                            <option value="3000-5000">3000-5000</option>
                            <option value="5000-1000">5000-1000</option>
                            <option value="10000+">10000+</option>
                        </select>
                        <select value={filters.jazzMinutes} onChange={(e) => onFilterChange(e, 'jazzMinutes')} className=" text-sm  border border-[#727375] rounded-[4px] p-1" name="select1" id="selectid1">
                            <option value="Duration">Jazz Mins</option>
                            <option value="0-1000">0-300</option>
                            <option value="1000-3000">301-500</option>
                            <option value="3000-5000">501-1000</option>
                            <option value="5000-1000">1000+</option>
                        </select>
                        <select value={filters.otherNetworkMinutes} onChange={(e) => onFilterChange(e, 'otherNetworkMinutes')} className=" text-sm  border border-[#727375] rounded-[4px] p-1 min-w-full " name="select1" id="selectid1">
                            <option value="Duration">Other Network Mins</option>
                            <option value="0-1000">0-50</option>
                            <option value="1000-3000">50-100</option>
                            <option value="3000-5000">100-200</option>
                        </select>
                        <select value={filters.sms} onChange={(e) => onFilterChange(e, 'sms')} className=" text-sm  border border-[#727375] rounded-[4px] p-1 min-w-full " name="select1" id="selectid1">
                            <option value="Duration">SMS</option>
                            <option value="0-1000">0-1000</option>
                            <option value="1000-3000">1000-3000</option>
                            <option value="3000-5000">3000-12000</option>
                        </select>

                        <select value={filters.price} onChange={(e) => onFilterChange(e, 'price')} className=" text-sm  border border-[#727375] rounded-[4px] p-1 min-w-full" name="select1" id="selectid1">
                            <option value="Duration">SMS</option>
                            <option value="0-1000">0-100</option>
                            <option value="1000-3000">101-300</option>
                            <option value="3000-5000">301-500</option>
                            <option value="3000-5000">500+</option>
                        </select>
                    </div>
                    <div className="text-center pt-3">
                        <button className="hover:shadow-[0_5px_12px_0_rgba(0,0,0,.15)] transition-shadow duration-500 ease-out text-[0.7rem] py-1 px-8 text-white rounded bg-red-600 font-medium">
                            APPLY FILTERS
                        </button>
                    </div>
                </div>
            </div>

            <div className="py-5 grid grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5].map((value) => {
                    return (
                        <div key={value} className="border px-4 cursor-pointer  transition-all duration-500 ease-in-out pt-5 hover:border-white hover:shadow-2xl  ">
                            <h3 className="font-bold" >Monthly</h3>
                            <p className="text-[2.125rem] text-red-500">SOCIAL PLUS</p>

                            <div className="pb-2">
                                <div className="min-h-[200px]">
                                    <p>
                                        <span className="font-bold text-red-500">10 GB</span> Data (WhatsApp, Facebook & Tamasha)
                                    </p>
                                    <p>
                                        <span className="font-bold text-red-500">300</span> Jazz Mins
                                    </p>
                                    <p>
                                        <span className="font-bold text-red-500">50</span> Other Network Minutes
                                    </p>
                                </div>



                                <div>
                                    <div className="mb-8">
                                        <span className="text-[2.125rem] text-red-500">Rs. 275</span> <span>(incl. Tax)</span>
                                    </div>
                                    <button className="px-5 py-3 bg-red-500 text-white text-[0.875rem] my-2">
                                        MORE DETAILS
                                    </button>
                                </div>
                            </div>


                            <div>
                                <img src="/src/assets/imgs/bemisaal-offer-1-thumb.png" />
                            </div>
                        </div>

                    )
                })}
            </div>
        </>
    )
}

export default Index;

interface ICategories {
    categories: Array<{
        img: string,
        text: string,
    }>
}

export default function CategoriesHorizontalComponent({ categories }: ICategories) {
    return (
        <>
            <div className="py-5">
                <div className="border-b">
                    <div className={` grid grid-cols-8 gap-2`}>
                        {
                            categories.map(c => (
                                <div className=" hover:border-b-red-500 hover:border-b flex justify-center pb-3">
                                    <button className="uppercase flex  flex-col items-center gap-3 text-[14px]">
                                        <img className="w-[40px]  " src={c.img} />
                                        <span>
                                            {c.text}
                                        </span>
                                    </button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
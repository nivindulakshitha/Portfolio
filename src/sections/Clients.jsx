import { clientReviews } from "../constants"

const Clients = () => {
    return (
        <section className="c-space my-20">
            <h3 className="head-text">Hear From My Clients</h3>

            <div className="client-container">
                {clientReviews.map(({ id, name, img, review, position }) => (
                    <div key={id} className="client-review">
                        <div>
                            <p className="text-white font-light">{review}</p>
                            
                            <div className="client-content">
                                <div className="flex gap-3">
                                    <img src={img} alt={name} className="w-12 h-12 rounded-full" />
                                    <div className="flex flex-col">
                                        <p className="font-semibol text-white-800">
                                            { name }
                                        </p>
                                        <p className="text-white-500 md:text-base text-sm font-light">
                                            {position}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex self-end items-center gap-2">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <img key={index} src="assets/star.png" alt="star" className="w-5 h-5" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Clients
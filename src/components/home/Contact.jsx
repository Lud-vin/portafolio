

export default function Contact() {

    return (
        <section className="mt-20">

            <div className="flex flex-col items-center">
                <h1 className="2xs:text-xl sm:text-2xl text-gray-200 font-semibold my-2">CONTACT ME</h1>
                <p className="2xs:text-sm sm:text-base text-center">(or click on icons to see more information)</p>
            </div>


            <div className="2xs:text-xl sm:text-2xl flex flex-col items-center space-y-5 py-10 mt-5 transition-all">
                <a
                    href="https://github.com/ludvin7x"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-2 hover:text-gray-200 hover:scale-110 transition-all "
                >
                    <i className="fa-brands fa-github hover:animate-spin-ease"></i>
                    <span className="2xs:text-sm sm:text-base">
                        github.com/ludvin7x
                    </span>
                </a>
                <a
                    href="https://www.linkedin.com/in/ludvinf/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-2 hover:text-gray-200 hover:scale-110 transition-all "
                >
                    <i class="fa-brands fa-linkedin"></i>
                    <span className="2xs:text-sm sm:text-base">
                        linkedin.com/in/ludvinf/
                    </span>
                </a>
                <p className="flex items-center space-x-2 hover:text-gray-200 hover:scale-110 transition-all">
                    <i className="fa-solid fa-envelope hover:animate-pulse"></i>
                    <span className="2xs:text-sm sm:text-base">
                        ludwing.df@live.com
                    </span>
                </p>

            </div>
        </section>
    )
}
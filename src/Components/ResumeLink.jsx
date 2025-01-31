import 'animate.css';
const ResumeLink = () => {
    return (
        <div className="flex justify-center mt-12 lg:mt-16">
            <a 
                href="https://docs.google.com/document/d/1BMhfm95OOmDo2A48xVJBx574_72czWFQ4aWTQ9RD6ec/edit?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="ml-1 inline-block rounded-xl border border-neutral-800 bg-purple-300 px-20 py-4 rounded-md bg-gradient-to-r from-purple-300 via-slate-500 
                    to-purple-500 hover:bg-blue-300 hover:bg-none"
            >
                <h3 className="font-medium text-center text-4xl text-white hover:text-blue-400 hover:underline hover:animate-pulse tracking-normal ">RESUME</h3>
            </a>
        </div>
    );
};

export default ResumeLink;
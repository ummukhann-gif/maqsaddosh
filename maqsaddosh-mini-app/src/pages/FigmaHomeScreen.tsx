import React from 'react';

const CategoryCard = ({
    left,
    top,
    imageElement,
    title,
    titleLeft,
    imageContainerClass = "absolute left-0 top-0 w-[100px] h-[100px] rounded-[32px] overflow-hidden bg-[rgba(255,255,255,0.03)] border-none"
}: {
    left: number;
    top: number;
    imageElement: React.ReactNode;
    title: string;
    titleLeft: number;
    imageContainerClass?: string;
}) => (
    <div
        className="absolute cursor-pointer transition-transform active:scale-95 group"
        style={{ left: `${left}px`, top: `${top}px`, width: '100px', height: '125px' }}
    >
        <div className={imageContainerClass}>
            {imageElement}
        </div>
        <span
            className="absolute text-[13px] font-[590] leading-[15.5px] text-white font-sans transition-opacity group-hover:opacity-100"
            style={{ left: `${titleLeft}px`, top: '109px', opacity: 0.5 }}
        >
            {title}
        </span>
    </div>
);

const FigmaHomeScreen: React.FC = () => {
    return (
        <div className="relative min-h-dvh w-full overflow-hidden bg-[#161616]">
            <div className="relative mx-auto h-dvh w-full max-w-[384px] bg-[#161616] overflow-hidden">

                {/* Background Decorative Mask */}
                <img
                    src="/assets/images/home_mask.svg"
                    alt=""
                    className="absolute left-[32px] top-[69.24px] w-[61.51px] h-[34.17px] opacity-100"
                    draggable={false}
                />

                {/* Random Users Illustration */}
                <img
                    src="/assets/images/home_illustration.svg"
                    alt="Random users"
                    className="absolute left-[24px] top-[130px] w-[336px] h-[64px] object-contain"
                    draggable={false}
                />

                {/* Top Header Section */}
                {/* Top Right Avatar */}
                <div className="absolute left-[288px] top-[64px] w-[72px] h-[46px] cursor-pointer active:opacity-80 transition-opacity">
                    <img
                        src="/assets/images/profile_avatar.svg"
                        alt="Profile Avatar"
                        className="w-[72px] h-[46px]"
                        draggable={false}
                    />
                </div>

                {/* Search Input Mockup */}
                <div className="absolute left-[117px] top-[64px] w-[150px] h-[46px] rounded-[14px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] cursor-text transition-colors active:bg-[rgba(255,255,255,0.04)]">
                    <img
                        src="/assets/images/icon_search.svg"
                        alt="Search"
                        className="absolute left-[11px] top-[11px] w-[24px] h-[24px] opacity-20"
                        draggable={false}
                    />
                    <span className="absolute left-[52px] top-[15px] font-sans text-[13px] font-[590] text-white opacity-40">
                        Qidiruv
                    </span>
                </div>

                {/* Categories Section Container */}
                <div className="absolute left-0 top-[231px] w-[384px] h-[645px]">
                    {/* Back Blur (Rectangle 61) */}
                    <div
                        className="absolute left-[22px] top-[0px] w-[340px] h-[634px] rounded-t-[32px] bg-[rgba(0,0,0,0.3)]"
                        style={{ boxShadow: '0px 8px 34px rgba(0,0,0,0.15)', backdropFilter: 'blur(94px)' }}
                    />
                    {/* Front Blur (Rectangle 60) */}
                    <div
                        className="absolute left-[0px] top-[11px] w-[384px] h-[634px] rounded-t-[42px] bg-[#0D0D0D]"
                        style={{ backdropFilter: 'blur(94px)' }}
                    />

                    {/* Pill Button "Yo'nalishlar" */}
                    <div className="absolute left-[142px] top-[25px] flex items-center justify-center px-[16px] py-[9px] rounded-[90px] bg-[rgba(255,255,255,0.04)]">
                        <span className="font-sans text-[14px] font-medium leading-[16.7px] text-white opacity-50">
                            Yo'nalishlar
                        </span>
                    </div>

                    {/* Grid Cards Container */}
                    <div className="absolute left-0 top-0 w-full h-full">

                        {/* ROW 1 */}
                        <CategoryCard
                            left={32} top={74}
                            title="Sayohat" titleLeft={24}
                            imageContainerClass="absolute left-0 top-0 w-[100px] h-[100px] rounded-[32px] overflow-hidden bg-[rgba(255,255,255,0.03)] border-none"
                            imageElement={<img src="/assets/images/cat_sayohat.png" alt="" className="w-full h-full object-cover" draggable={false} />}
                        />
                        <CategoryCard
                            left={142} top={74}
                            title="Talim" titleLeft={33}
                            imageContainerClass="absolute left-0 top-0 w-[100px] h-[100px] rounded-[32px] overflow-hidden border-none text-center"
                            imageElement={<img src="/assets/images/cat_talim_gif.gif" alt="" className="w-full h-full object-cover" draggable={false} />}
                        />
                        <CategoryCard
                            left={252} top={74}
                            title="Kasblar" titleLeft={26}
                            imageContainerClass="absolute left-0 top-0 w-[100px] h-[100px]"
                            imageElement={
                                <>
                                    <div className="w-[50px] h-[50px] absolute left-0 top-0 bg-[rgba(255,255,255,0.03)] rounded-[18px] overflow-hidden"><img src="/assets/images/kasb_1_1.png" className="w-full h-full object-cover" draggable={false} /></div>
                                    <div className="w-[50px] h-[50px] absolute left-[50px] top-0 bg-[rgba(255,255,255,0.03)] rounded-[18px] overflow-hidden"><img src="/assets/images/kasb_1_3.png" className="w-full h-full object-cover" draggable={false} /></div>
                                    <div className="w-[50px] h-[50px] absolute left-0 top-[50px] bg-[rgba(255,255,255,0.03)] rounded-[18px] overflow-hidden"><img src="/assets/images/kasb_1_2.png" className="w-full h-full object-cover" draggable={false} /></div>
                                    <div className="w-[50px] h-[50px] absolute left-[50px] top-[50px] bg-[rgba(255,255,255,0.03)] rounded-[18px] overflow-hidden flex items-center justify-center"><img src="/assets/images/kasb_1_4_gif.gif" className="w-full h-full object-cover" draggable={false} /></div>
                                </>
                            }
                        />

                        {/* ROW 2 */}
                        <CategoryCard
                            left={32} top={223}
                            title="Sport" titleLeft={32}
                            imageContainerClass="absolute left-0 top-0 w-[100px] h-[100px] rounded-[32px] bg-[rgba(255,255,255,0.03)] relative overflow-hidden"
                            imageElement={
                                <>
                                    <img src="/assets/images/cat_biznes.png" className="absolute left-[10px] top-[10px] w-[44px] h-[44px] rounded-[18px] object-cover" draggable={false} />
                                    <img src="/assets/images/cat_til_1.png" className="absolute left-[46px] top-[46px] w-[44px] h-[44px] rounded-[18px] object-cover" draggable={false} />
                                </>
                            }
                        />
                        {/* Biznes GIF Card */}
                        <CategoryCard
                            left={142} top={223}
                            title="Biznes" titleLeft={29}
                            imageContainerClass="absolute left-0 top-0 w-[100px] h-[100px] rounded-[32px] bg-[rgba(255,255,255,0.03)] overflow-hidden flex items-center justify-center"
                            imageElement={
                                <div className="w-[80px] h-[80px] rounded-full overflow-hidden flex items-center justify-center">
                                    <img src="/assets/images/cat_biznes_gif.gif" alt="" className="w-full h-full object-cover" draggable={false} />
                                </div>
                            }
                        />
                        {/* Til o'rganish */}
                        <CategoryCard
                            left={252} top={223}
                            title="Til o'ranish" titleLeft={15}
                            imageContainerClass="absolute left-0 top-0 w-[100px] h-[100px] rounded-[32px] overflow-hidden bg-[rgba(255,255,255,0.03)] flex flex-col items-center"
                            imageElement={<img src="/assets/images/cat_til_gif.gif" alt="" className="w-full h-full object-cover" draggable={false} />}
                        />

                        {/* ROW 3 */}
                        <CategoryCard
                            left={32} top={372}
                            title="Kasblar" titleLeft={26}
                            imageContainerClass="absolute left-0 top-0 w-[100px] h-[100px]"
                            imageElement={
                                <>
                                    <div className="w-[50px] h-[50px] absolute left-0 top-0 bg-[rgba(255,255,255,0.03)] rounded-[18px] overflow-hidden"><img src="/assets/images/kasb_2_1.png" className="w-full h-full object-cover" draggable={false} /></div>
                                    <div className="w-[50px] h-[50px] absolute left-[50px] top-0 bg-[rgba(255,255,255,0.03)] rounded-[18px] overflow-hidden"><img src="/assets/images/kasb_1_2.png" className="w-full h-full object-cover" draggable={false} /></div>
                                    <div className="w-[50px] h-[50px] absolute left-0 top-[50px] bg-[rgba(255,255,255,0.03)] rounded-[18px] overflow-hidden"><img src="/assets/images/kasb_1_3.png" className="w-full h-full object-cover" draggable={false} /></div>
                                    <div className="w-[50px] h-[50px] absolute left-[50px] top-[50px] bg-[#000000] rounded-[18px] overflow-hidden flex items-center justify-center">
                                        <img src="/assets/images/kasb_2_4.png" className="w-full h-full object-cover" draggable={false} />
                                    </div>
                                </>
                            }
                        />
                        <CategoryCard
                            left={142} top={372}
                            title="Robototexnika" titleLeft={4}
                            imageContainerClass="absolute left-0 top-0 w-[100px] h-[100px] rounded-[32px] overflow-hidden bg-[rgba(255,255,255,0.03)]"
                            imageElement={<img src="/assets/images/cat_robot.png" alt="" className="w-full h-full object-cover text-center" draggable={false} />}
                        />
                        <CategoryCard
                            left={252} top={372}
                            title="Talim" titleLeft={33}
                            imageContainerClass="absolute left-0 top-0 w-[100px] h-[100px] rounded-[32px] overflow-hidden border-none text-center"
                            imageElement={<img src="/assets/images/cat_talim_gif.gif" alt="" className="w-full h-full object-cover" draggable={false} />}
                        />

                    </div>
                </div>

                {/* Bottom Navigation Bar */}
                <div className="absolute left-0 bottom-[-1px] w-[384px] h-[98px]">
                    {/* blur background */}
                    <div
                        className="absolute left-0 top-0 w-[384px] h-[98px] rounded-t-[32px] bg-[rgba(18,18,18,0.7)]"
                        style={{ backdropFilter: 'blur(64px)' }}
                    />
                    {/* Home indicator logic */}
                    <div className="absolute left-1/2 bottom-[8px] w-[144px] h-[5px] rounded-[100px] bg-white opacity-10 -translate-x-1/2" />

                    {/* Navigation Items */}
                    <div className="absolute left-[79px] top-[20px] flex items-center gap-[5px]">
                        {/* Home */}
                        <div className="w-[72px] flex flex-col items-center gap-[3px] cursor-pointer">
                            <img src="/assets/images/icon_home.svg" alt="Home" className="w-[24px] h-[24px]" draggable={false} />
                            <span className="font-sans text-[13px] font-medium leading-[15.5px] text-[rgba(255,255,255,0.5)]">Home</span>
                        </div>
                        {/* Tasma */}
                        <div className="w-[72px] flex flex-col items-center gap-[3px] cursor-pointer hover:opacity-80 transition-opacity">
                            <img src="/assets/images/icon_ufo.svg" alt="Tasma" className="w-[24px] h-[24px] opacity-100" draggable={false} />
                            <span className="font-sans text-[13px] font-medium leading-[15.5px] text-[rgba(255,255,255,0.5)]">Tasma</span>
                        </div>
                        {/* Profil */}
                        <div className="w-[72px] flex flex-col items-center gap-[3px] cursor-pointer hover:opacity-80 transition-opacity">
                            <img src="/assets/images/icon_user.svg" alt="Profil" className="w-[24px] h-[24px]" draggable={false} />
                            <span className="font-sans text-[13px] font-medium leading-[15.5px] text-[rgba(255,255,255,0.5)]">Profil</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FigmaHomeScreen;

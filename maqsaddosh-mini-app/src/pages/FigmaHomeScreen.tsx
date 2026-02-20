import React from 'react';

const CategoryCard = ({
    imageElement,
    title,
    imageContainerClass = "relative w-full aspect-square rounded-[32px] overflow-hidden bg-[rgba(255,255,255,0.03)] border-none"
}: {
    imageElement: React.ReactNode;
    title: string;
    imageContainerClass?: string;
}) => (
    <div className="flex flex-col items-center cursor-pointer transition-transform active:scale-95 group w-full">
        <div className={imageContainerClass}>
            {imageElement}
        </div>
        <span className="text-[13px] font-[590] leading-[15.5px] text-white font-sans transition-opacity group-hover:opacity-100 opacity-50 mt-[8px] text-center w-full">
            {title}
        </span>
    </div>
);

const FigmaHomeScreen: React.FC = () => {
    return (
        <div className="relative min-h-dvh w-full overflow-hidden bg-[#161616] flex flex-col">
            <div className="relative mx-auto h-dvh w-full max-w-[430px] bg-[#161616] flex flex-col">

                {/* Background Decorative Mask */}
                <div className="absolute w-full top-[69px] px-[32px] pointer-events-none">
                    <img src="/assets/images/home_mask.svg" alt="" className="w-[61.51px] h-[34.17px] opacity-100" draggable={false} />
                </div>

                {/* Random Users Illustration (Scrollable) */}
                <div className="relative mt-[130px] w-full overflow-x-auto overflow-y-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    <div className="flex items-center gap-[4px] w-max px-[24px]">
                        {[1, 5, 2, 3, 4].map((userNum, idx) => (
                            <img
                                key={idx}
                                src={`/assets/images/top_user_${userNum}.png`}
                                alt={`User ${idx + 1}`}
                                className="w-[82px] h-[82px] object-cover flex-shrink-0 rounded-[32px]"
                                draggable={false}
                            />
                        ))}
                    </div>
                </div>

                {/* Top Header Section */}
                <div className="absolute top-[64px] left-0 w-full px-[24px] flex items-center justify-between pointer-events-none">
                    <div className="w-[72px]" /> {/* Spacer for symmetry */}
                    <div className="flex-1 flex justify-center px-2 pointer-events-auto">
                        <div className="w-full max-w-[150px] relative h-[46px] rounded-[14px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] cursor-text transition-colors active:bg-[rgba(255,255,255,0.04)]">
                            <img src="/assets/images/icon_search.svg" alt="Search" className="absolute left-[11px] top-[11px] w-[24px] h-[24px] opacity-60" draggable={false} />
                            <span className="absolute left-[52px] top-[15px] font-sans text-[13px] font-[590] text-white opacity-40">Qidiruv</span>
                        </div>
                    </div>
                    <div className="w-[72px] h-[46px] cursor-pointer active:opacity-80 transition-opacity pointer-events-auto flex items-center justify-end">
                        <img src="/assets/images/profile_avatar.svg" alt="Profile Avatar" className="w-[72px] h-[46px] object-cover rounded-[18px]" draggable={false} />
                    </div>
                </div>

                {/* Categories Section Container */}
                <div className="relative flex-1 w-full mt-[16px] rounded-t-[32px] overflow-hidden flex flex-col">
                    {/* Back Blur (Rectangle 61) */}
                    <div className="absolute left-[22px] right-[22px] top-0 bottom-0 rounded-t-[32px] bg-[rgba(0,0,0,0.3)] shadow-[0px_8px_34px_rgba(0,0,0,0.15)] backdrop-blur-[94px] pointer-events-none" />
                    {/* Front Blur (Rectangle 60) */}
                    <div className="absolute inset-0 top-[11px] rounded-t-[42px] bg-[#0D0D0D] backdrop-blur-[94px] pointer-events-none" />

                    {/* Pill Button "Yo'nalishlar" */}
                    <div className="relative z-10 w-full flex justify-center mt-[25px]">
                        <div className="flex items-center justify-center px-[16px] py-[9px] rounded-[90px] bg-[rgba(255,255,255,0.04)]">
                            <span className="font-sans text-[14px] font-medium leading-[16.7px] text-white opacity-50">Yo'nalishlar</span>
                        </div>
                    </div>

                    {/* Grid Cards Container - Responsive Scroll */}
                    <div className="relative z-10 w-full flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-[24px] pt-[24px] pb-[120px]">
                        <div className="grid grid-cols-3 gap-x-[12px] gap-y-[24px] w-full max-w-[340px] mx-auto">
                            {/* ROW 1 */}
                            <CategoryCard
                                title="Sayohat"
                                imageElement={<img src="/assets/images/cat_sayohat.png" alt="" className="w-full h-full object-cover" draggable={false} />}
                            />
                            <CategoryCard
                                title="Talim"
                                imageContainerClass="relative w-full aspect-square rounded-[32px] overflow-hidden border-none text-center"
                                imageElement={<img src="/assets/images/cat_talim_gif.gif" alt="" className="w-[133%] h-full absolute left-1/2 -translate-x-1/2 top-0 max-w-none object-cover" draggable={false} />}
                            />
                            <CategoryCard
                                title="Kasblar"
                                imageContainerClass="relative w-full aspect-square"
                                imageElement={
                                    <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                                        <div className="w-full h-full bg-[rgba(255,255,255,0.03)] rounded-[18px] overflow-hidden"><img src="/assets/images/kasb_1_1.png" className="w-full h-full object-cover" draggable={false} /></div>
                                        <div className="w-full h-full bg-[rgba(255,255,255,0.03)] rounded-[18px] overflow-hidden"><img src="/assets/images/kasb_1_3.png" className="w-full h-full object-cover" draggable={false} /></div>
                                        <div className="w-full h-full bg-[rgba(255,255,255,0.03)] rounded-[18px] overflow-hidden"><img src="/assets/images/kasb_1_2.png" className="w-full h-full object-cover" draggable={false} /></div>
                                        <div className="w-full h-full bg-[rgba(255,255,255,0.03)] rounded-[18px] overflow-hidden flex items-center justify-center"><img src="/assets/images/kasb_1_4_gif.gif" className="w-full h-full object-cover" draggable={false} /></div>
                                    </div>
                                }
                            />

                            {/* ROW 2 */}
                            <CategoryCard
                                title="Sport"
                                imageContainerClass="relative w-full aspect-square rounded-[32px] bg-[rgba(255,255,255,0.03)] overflow-hidden"
                                imageElement={
                                    <>
                                        <img src="/assets/images/cat_biznes.png" className="absolute left-[10%] top-[10%] w-[44%] h-[44%] rounded-[18px] object-cover" draggable={false} />
                                        <img src="/assets/images/cat_til_1.png" className="absolute left-[46%] top-[46%] w-[44%] h-[44%] rounded-[18px] object-cover" draggable={false} />
                                    </>
                                }
                            />
                            {/* Biznes GIF Card */}
                            <CategoryCard
                                title="Biznes"
                                imageContainerClass="relative w-full aspect-square rounded-[32px] bg-[rgba(255,255,255,0.03)] overflow-hidden flex items-center justify-center"
                                imageElement={
                                    <div className="w-[80%] h-[80%] rounded-full overflow-hidden flex items-center justify-center bg-[#E5B144]">
                                        <img src="/assets/images/cat_biznes_gif.gif" alt="" className="w-[102%] h-[110%] object-cover max-w-none" draggable={false} />
                                    </div>
                                }
                            />
                            {/* Til o'rganish */}
                            <CategoryCard
                                title="Til o'ranish"
                                imageContainerClass="relative w-full aspect-square rounded-[32px] overflow-hidden bg-[rgba(255,255,255,0.03)] flex flex-col items-center justify-center"
                                imageElement={<img src="/assets/images/cat_til_gif.gif" alt="" className="w-full h-full object-cover" draggable={false} />}
                            />

                            {/* ROW 3 */}
                            <CategoryCard
                                title="Kasblar"
                                imageContainerClass="relative w-full aspect-square"
                                imageElement={
                                    <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                                        <div className="w-full h-full bg-[rgba(255,255,255,0.03)] rounded-[18px] overflow-hidden"><img src="/assets/images/kasb_2_1.png" className="w-full h-full object-cover" draggable={false} /></div>
                                        <div className="w-full h-full bg-[rgba(255,255,255,0.03)] rounded-[18px] overflow-hidden"><img src="/assets/images/kasb_1_2.png" className="w-full h-full object-cover" draggable={false} /></div>
                                        <div className="w-full h-full bg-[rgba(255,255,255,0.03)] rounded-[18px] overflow-hidden"><img src="/assets/images/kasb_1_3.png" className="w-full h-full object-cover" draggable={false} /></div>
                                        <div className="w-full h-full bg-[#000000] rounded-[18px] overflow-hidden flex items-center justify-center">
                                            <img src="/assets/images/kasb_2_4.png" className="w-full h-full object-cover" draggable={false} />
                                        </div>
                                    </div>
                                }
                            />
                            <CategoryCard
                                title="Robototexnika"
                                imageContainerClass="relative w-full aspect-square rounded-[32px] overflow-hidden bg-[rgba(255,255,255,0.03)]"
                                imageElement={<img src="/assets/images/cat_robot.png" alt="" className="w-full h-full object-cover" draggable={false} />}
                            />
                            <CategoryCard
                                title="Talim"
                                imageContainerClass="relative w-full aspect-square rounded-[32px] overflow-hidden border-none text-center"
                                imageElement={<img src="/assets/images/cat_talim_gif.gif" alt="" className="w-[133%] h-full absolute left-1/2 -translate-x-1/2 top-0 max-w-none object-cover" draggable={false} />}
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Navigation Bar */}
                <div className="absolute left-0 bottom-0 w-full h-[98px] z-50 pb-env-safe">
                    {/* blur background */}
                    <div
                        className="absolute inset-0 rounded-t-[32px] bg-[rgba(18,18,18,0.7)]"
                        style={{ backdropFilter: 'blur(64px)' }}
                    />
                    {/* Home indicator logic */}
                    <div className="absolute left-1/2 bottom-[8px] w-[144px] h-[5px] rounded-[100px] bg-white opacity-10 -translate-x-1/2" />

                    {/* Navigation Items */}
                    <div className="absolute top-[20px] w-full flex justify-center gap-[5px]">
                        {/* Home */}
                        <div className="w-[72px] flex flex-col items-center gap-[3px] cursor-pointer">
                            <img src="/assets/images/icon_home_new.svg" alt="Home" className="w-[24px] h-[24px]" draggable={false} />
                            <span className="font-sans text-[13px] font-medium leading-[15.5px] text-[rgba(255,255,255,0.5)]">Home</span>
                        </div>
                        {/* Tasma */}
                        <div className="w-[72px] flex flex-col items-center gap-[3px] cursor-pointer hover:opacity-80 transition-opacity">
                            <img src="/assets/images/icon_ufo_new.svg" alt="Tasma" className="w-[24px] h-[24px] opacity-100" draggable={false} />
                            <span className="font-sans text-[13px] font-medium leading-[15.5px] text-[rgba(255,255,255,0.5)]">Tasma</span>
                        </div>
                        {/* Profil */}
                        <div className="w-[72px] flex flex-col items-center gap-[3px] cursor-pointer hover:opacity-80 transition-opacity">
                            <img src="/assets/images/icon_user_new.svg" alt="Profil" className="w-[24px] h-[24px]" draggable={false} />
                            <span className="font-sans text-[13px] font-medium leading-[15.5px] text-[rgba(255,255,255,0.5)]">Profil</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FigmaHomeScreen;

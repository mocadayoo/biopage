const links = [
    {
        title: "Twitter (X)",
        url: "https://x.com/Moca_dao_",
        banner_img: "https://pbs.twimg.com/profile_banners/1875373415751938050/1766265459/1500x500",
        alt_text: "x profile header"
    },
    {
        title: "VRChat",
        url: "https://vrchat.com/home/user/usr_d24f8b50-8bc1-4935-b482-3252a1777ed5",
        banner_img: "/assets/VRCLogo.png",
        alt_text: "VRChat Logo"
    }
]

const links_container = document.getElementById('link_container')

links_container.innerHTML += links.map(link => `
            <div class="rounded-3xl bg-white/50 dark:bg-white/5 border border-white/20 dark:border-white/10 backdrop-blur-md hover:scale-[1.03] shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                <a href="${link.url}" target="_blank" class="group flex flex-col">
                    <div class="relative">
                        <img class="rounded-t-3xl" src="${link.banner_img}" alt="${link.alt_text}"/>
                        <div class="rounded-t-3xl  overflow-hidden absolute inset-0 w-full bg-gradient-to-t from-black opacity-60 group-hover:opacity-80 via-transparent via-30% to-transparent transition-opacity duration-300"></div>
                    </div>
                    <p class="p-2 font-bold opacity-90 group-hover:opacity-100 transition-opacity">
                        ${link.title}
                    </p>
                </a>
            </div>`
).join('');
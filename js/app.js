let servicesInfo=[
    {
        "imgUrl": "https://img.icons8.com/nolan/64/web.png",
        "heading": "Web Development",
        "description": "Our Developers offer full fledged support for the website you imagine, brought to life. We give you top quality performance in prices so affordable you can't believe",
        "linkText": "Get your own Website now →", 
        "id": "web"


    },
    {
        "imgUrl": "https://img.icons8.com/nolan/64/mobile-package-tracking.png",
        "heading": "App Development",
        "description" : "Need an App that provides to the needs of your company? Need Developers who can provide services according to your design? If these are your questions, We are your answer.",
        "linkText": "Get an App for your business →",
        "id": "app"

    },
    {
        "imgUrl": "https://img.icons8.com/nolan/64/adobe-illustrator.png",
        "heading": "Designing",
        "description" : "We help you deal with talented designers whether it be graphics or UI/UX designs. Make your project stand out and power up your brand, with our effective and quality services.",
        "linkText": "Get an awesome design →",
        "id": "design"

    },
    {
        "imgUrl": "https://img.icons8.com/nolan/64/video.png",
        "heading": "Video Editing",
        "description" : "We transform your raw footage into professional video. Excelling at making your videos from simple to stunning, We turn your given content into impactful visuals.",
        "linkText": "Get your video edited! →",
        "id": "vedit"

    },
    {
        "imgUrl": "https://img.icons8.com/nolan/64/pen.png",
        "heading": "Content Writing",
        "description" : "Content that moves people, Yes please. We make content that makes you stand out and presence known.Discuss your next project for the best engaging writings.",
        "linkText": "Get Content Writer →",
        "id": "cntwrt"

    },
    {
        "imgUrl": "https://img.icons8.com/nolan/64/commercial.png",
        "heading": "Digital Marketing",
        "description" : "Looking someone to help you advertise and follow-up your business? We produce strategies and give results which have max reach to your business and help you maintain your social media.",
        "linkText": "Market your business online →",
        "id": "dimark"
    }
]


let scards = document.getElementById("scards")

function displayCard(){
    servicesInfo.forEach(item=> {
scards.innerHTML += `<div class="col "  data-aos="fade-up" >
<div class="card" id=${item.id}  >
<img src=${item.imgUrl} loading="lazy" alt=${item.heading} />
<h4> ${item.heading} </h4>
<p> ${item.description} </p>
<a href="#contactus" class="nav-link p-0 m-0"><h6>${item.linkText}</h6></a>
</div>
</div>`
    })
}

displayCard()
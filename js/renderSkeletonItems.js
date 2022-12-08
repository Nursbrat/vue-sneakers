export const renderSkeleton=()=>{
    const cotalogContent=document.querySelector('.catalog__content')

    cotalogContent.innerHTML+=`
    <div class="box">
    <div class="container">
        <div class="header">
            <div class="img"></div>
        </div>
        <div class="article">
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <div class="footer">

            <div class="btn"></div>
            <div class="btn btn-2"></div>

        </div>
    </div>
</div>
    `
}
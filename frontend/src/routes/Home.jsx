import React from 'react'
import IconText from '../components/shared/IconText'

export default function Home() {
  return (
    <div className='w-full h-full bg-gradient-to-r from-gray-800 to-black text-white flex'>
      <div className='bg-black h-full w-1/5'>
      <div className='p-5 w-full flex flex-col justify-between h-full'>
        <div className='flex flex-col'>
            <svg xmlns="http://www.w3.org/2000/svg" width="10em" height="3em" className='' viewBox="0 0 512 160"><path fill="white" d="M79.655 0C35.664 0 0 35.663 0 79.654c0 43.993 35.664 79.653 79.655 79.653c43.996 0 79.656-35.66 79.656-79.653c0-43.988-35.66-79.65-79.657-79.65zm36.53 114.884a4.963 4.963 0 0 1-6.83 1.646c-18.702-11.424-42.246-14.011-69.973-7.676a4.967 4.967 0 0 1-5.944-3.738a4.96 4.96 0 0 1 3.734-5.945c30.343-6.933 56.37-3.948 77.367 8.884a4.965 4.965 0 0 1 1.645 6.83m9.75-21.689c-1.799 2.922-5.622 3.845-8.543 2.047c-21.41-13.16-54.049-16.972-79.374-9.284a6.22 6.22 0 0 1-7.75-4.138a6.22 6.22 0 0 1 4.141-7.745c28.929-8.778 64.892-4.526 89.48 10.583c2.92 1.798 3.843 5.622 2.045 8.538m.836-22.585C101.1 55.362 58.742 53.96 34.231 61.4c-3.936 1.194-8.098-1.028-9.29-4.964a7.453 7.453 0 0 1 4.965-9.294c28.137-8.542 74.912-6.892 104.469 10.655a7.44 7.44 0 0 1 2.606 10.209c-2.092 3.54-6.677 4.707-10.206 2.605zm89.944 2.922c-13.754-3.28-16.198-5.581-16.198-10.418c0-4.57 4.299-7.645 10.7-7.645c6.202 0 12.347 2.336 18.796 7.143c.19.145.437.203.675.165a.9.9 0 0 0 .6-.367l6.715-9.466a.903.903 0 0 0-.171-1.225c-7.676-6.157-16.313-9.15-26.415-9.15c-14.848 0-25.225 8.911-25.225 21.662c0 13.673 8.95 18.515 24.417 22.252c13.155 3.031 15.38 5.57 15.38 10.11c0 5.032-4.49 8.161-11.718 8.161c-8.028 0-14.582-2.71-21.906-9.046a.93.93 0 0 0-.656-.218a.9.9 0 0 0-.619.313l-7.533 8.96a.906.906 0 0 0 .086 1.256c8.522 7.61 19.004 11.624 30.323 11.624c16 0 26.339-8.742 26.339-22.277c.028-11.421-6.81-17.746-23.561-21.821zm59.792-13.564c-6.934 0-12.622 2.732-17.321 8.33V62c0-.498-.4-.903-.894-.903h-12.318a.9.9 0 0 0-.894.902v70.009c0 .494.4.903.894.903h12.318a.9.9 0 0 0 .894-.903v-22.097c4.699 5.26 10.387 7.838 17.32 7.838c12.89 0 25.94-9.92 25.94-28.886c.019-18.97-13.032-28.894-25.93-28.894zm11.614 28.893c0 9.653-5.945 16.397-14.468 16.397c-8.418 0-14.772-7.048-14.772-16.397c0-9.35 6.354-16.397 14.772-16.397c8.38 0 14.468 6.893 14.468 16.396m47.759-28.893c-16.598 0-29.601 12.78-29.601 29.1c0 16.143 12.917 28.784 29.401 28.784c16.655 0 29.696-12.736 29.696-28.991c0-16.2-12.955-28.89-29.496-28.89zm0 45.385c-8.827 0-15.485-7.096-15.485-16.497c0-9.444 6.43-16.298 15.285-16.298c8.884 0 15.58 7.093 15.58 16.504c0 9.443-6.468 16.291-15.38 16.291m64.937-44.258h-13.554V47.24c0-.497-.4-.902-.894-.902H374.05a.906.906 0 0 0-.904.902v13.855h-5.916a.9.9 0 0 0-.894.902v10.584a.9.9 0 0 0 .894.903h5.916v27.39c0 11.062 5.508 16.674 16.38 16.674c4.413 0 8.075-.914 11.528-2.873a.88.88 0 0 0 .457-.78v-10.083a.9.9 0 0 0-.428-.76a.87.87 0 0 0-.876-.039c-2.368 1.19-4.66 1.741-7.229 1.741c-3.947 0-5.716-1.798-5.716-5.812V73.49h13.554a.9.9 0 0 0 .894-.903V62.003a.873.873 0 0 0-.884-.903zm47.217.054v-1.702c0-5.006 1.921-7.238 6.22-7.238c2.57 0 4.633.51 6.945 1.28a.895.895 0 0 0 1.18-.858l-.001-10.377a.89.89 0 0 0-.637-.865c-2.435-.726-5.555-1.47-10.235-1.47c-11.367 0-17.388 6.405-17.388 18.516v2.606H428.2a.906.906 0 0 0-.904.902v10.638c0 .497.41.903.904.903h5.916v42.237c0 .504.41.904.904.904h12.308c.504 0 .904-.4.904-.904V73.487h11.5l17.616 42.234c-1.998 4.433-3.967 5.317-6.65 5.317c-2.168 0-4.46-.646-6.79-1.93a.98.98 0 0 0-.714-.067a.9.9 0 0 0-.533.485l-4.175 9.16a.9.9 0 0 0 .39 1.17c4.356 2.359 8.284 3.367 13.145 3.367c9.093 0 14.125-4.242 18.548-15.637l21.364-55.204a.88.88 0 0 0-.095-.838a.88.88 0 0 0-.733-.392h-12.822a.9.9 0 0 0-.856.605l-13.136 37.509l-14.382-37.534a.9.9 0 0 0-.837-.58h-21.04zm-27.375-.054h-12.318a.907.907 0 0 0-.903.902v53.724c0 .504.409.904.903.904h12.318c.495 0 .904-.4.904-.904v-53.72a.9.9 0 0 0-.904-.903zm-6.088-24.464c-4.88 0-8.836 3.95-8.836 8.828a8.835 8.835 0 0 0 8.836 8.836c4.88 0 8.827-3.954 8.827-8.836a8.83 8.83 0 0 0-8.827-8.828"></path></svg>
            <div className='mt-10'>
                <IconText 
                Icon={<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M13.5 21v-4h-3v4H7a1 1 0 0 1-1-1v-6H3.414a1 1 0 0 1-.707-1.707l8.586-8.586a1 1 0 0 1 1.414 0l8.586 8.586A1 1 0 0 1 20.586 14H18v6a1 1 0 0 1-1 1z"/></svg>}
                displayText={"Home"} 
                active={true}/>
                <IconText 
                Icon={<svg xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" viewBox="0 0 16 16"><path  fill="currentColor" stroke="currentColor" strokeWidth="1"  d="M10.68 11.74a6 6 0 0 1-7.922-8.982a6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275a.75.75 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7"/></svg>}
                displayText={"Search"}
                active={false}/>
                <IconText 
                Icon={<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><g fill="currentColor"  fillRule="evenodd" clipRule="evenodd"><path d="M12 9.75a.75.75 0 0 1 .75.75c0 .539.315 1.1.834 1.56c.53.471 1.11.69 1.416.69a.75.75 0 0 1 0 1.5c-.738 0-1.58-.387-2.25-.93V17a2.25 2.25 0 1 1-1.5-2.122V10.5a.75.75 0 0 1 .75-.75M11.25 17a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0"/><path d="M8.7 1.25h6.6c.22 0 .389 0 .536.016A2.75 2.75 0 0 1 18.29 3.87a2.888 2.888 0 0 1 2.054 2.721c.601.18 1.12.465 1.544.923c.652.705.854 1.572.862 2.586c.007.975-.166 2.207-.382 3.736l-.44 3.114c-.168 1.196-.305 2.168-.518 2.929c-.223.797-.552 1.452-1.16 1.956c-.604.5-1.32.715-2.166.817c-.819.098-1.849.098-3.13.098H9.046c-1.282 0-2.312 0-3.13-.098c-.847-.102-1.563-.317-2.167-.817c-.608-.504-.937-1.16-1.16-1.956c-.213-.761-.35-1.733-.519-2.93l-.439-3.113c-.215-1.53-.39-2.761-.382-3.736c.008-1.014.21-1.881.862-2.586c.424-.458.942-.742 1.543-.923a2.888 2.888 0 0 1 2.055-2.72a2.75 2.75 0 0 1 2.454-2.605c.147-.016.316-.016.535-.016m-3.51 5.078c.926-.078 2.06-.078 3.427-.078h6.768c1.366 0 2.5 0 3.427.078a1.383 1.383 0 0 0-1.35-1.078H6.539c-.669 0-1.212.47-1.349 1.078m10.487-3.57c.55.058.985.468 1.092.992H7.232a1.25 1.25 0 0 1 1.092-.993c.056-.006.136-.007.417-.007h6.518c.28 0 .36.001.417.007M3.213 8.532c.303-.327.758-.544 1.643-.662c.901-.12 2.108-.121 3.816-.121h6.656c1.708 0 2.915.002 3.816.121c.885.118 1.34.335 1.643.662c.296.32.457.755.463 1.579c.006.85-.15 1.97-.376 3.576l-.423 3c-.178 1.261-.302 2.133-.485 2.787c-.177.63-.384.965-.673 1.204c-.293.244-.687.4-1.388.484c-.719.086-1.658.087-3 .087h-5.81c-1.342 0-2.281-.001-3-.087c-.7-.085-1.095-.24-1.388-.483c-.289-.24-.496-.576-.673-1.205c-.183-.654-.307-1.526-.485-2.787l-.423-3c-.226-1.605-.382-2.726-.376-3.576c.006-.824.167-1.26.463-1.579"/></g></svg>}
                displayText={"Library"}
                active={false}/>
            </div>
            <div className='w-full py-5'>
                <IconText 
                Icon={<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256"><path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-24 104h-48v48a8 8 0 0 1-16 0v-48H72a8 8 0 0 1 0-16h48V72a8 8 0 0 1 16 0v48h48a8 8 0 0 1 0 16"/></svg>}
                displayText={"Create Playlist"}
                active={false}/>
                <IconText 
                Icon={<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><rect width="14" height="14" fill="white" className='translate-x-1 translate-y-1'/><path fill="#0078FF" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m7 14l.72-.66C15.3 14 17 12.46 17 10.57c0-1.54-1.21-2.75-2.75-2.75c-.87 0-1.7.41-2.25 1.05a3 3 0 0 0-2.25-1.05C8.21 7.82 7 9.03 7 10.57c0 1.89 1.7 3.43 4.28 5.77z"/></svg>}
                displayText={"Library"}
                active={false}/>
            </div>
        </div>
        <div className='border border-gray-300 hover:border-white text-gray-300 hover:text-white p-2 px-5 rounded-full w-max flex items-center mb-10'>
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M21.41 8.64v-.05a10 10 0 0 0-18.78 0s0 0 0 .05a9.86 9.86 0 0 0 0 6.72v.05a10 10 0 0 0 18.78 0s0 0 0-.05a9.86 9.86 0 0 0 0-6.72M4.26 14a7.82 7.82 0 0 1 0-4h1.86a16.73 16.73 0 0 0 0 4Zm.82 2h1.4a12.15 12.15 0 0 0 1 2.57A8 8 0 0 1 5.08 16m1.4-8h-1.4a8 8 0 0 1 2.37-2.57A12.15 12.15 0 0 0 6.48 8M11 19.7A6.34 6.34 0 0 1 8.57 16H11Zm0-5.7H8.14a14.36 14.36 0 0 1 0-4H11Zm0-6H8.57A6.34 6.34 0 0 1 11 4.3Zm7.92 0h-1.4a12.15 12.15 0 0 0-1-2.57A8 8 0 0 1 18.92 8M13 4.3A6.34 6.34 0 0 1 15.43 8H13Zm0 15.4V16h2.43A6.34 6.34 0 0 1 13 19.7m2.86-5.7H13v-4h2.86a14.36 14.36 0 0 1 0 4m.69 4.57a12.15 12.15 0 0 0 1-2.57h1.4a8 8 0 0 1-2.4 2.57M19.74 14h-1.86a16.16 16.16 0 0 0 .12-2a16.28 16.28 0 0 0-.12-2h1.86a7.82 7.82 0 0 1 0 4"/></svg>
            <div className='px-2 font-semibold'>English</div>
        </div>
      </div>
      </div>
      <div className='h-full'>
        hello
      </div>
    </div>
  )
}

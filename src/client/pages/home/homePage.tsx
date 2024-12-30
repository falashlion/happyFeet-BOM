import React from 'react'
import logo from '../../components/logo'



const homePage : React.FC = () => {
  const NavigationMenu = () => {
    const handleNavigation = (targetPageId: string) => {
      // Hide the main page
      document.querySelector("main").classList.add("hidden");
      // Show the target page
      document.querySelector(`#${targetPageId}`).classList.remove("hidden");
    };
  }
  return (
    <>
<head>
{/* <meta charset="UTF-8"/> */}
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Premium Footwear | Luxury Shoes Collection</title>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet"/>
<link href="https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.6.0/css/glide.core.min.css" rel="stylesheet"/>
<link href="https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.6.0/css/glide.theme.min.css" rel="stylesheet"/>
<link href="https://ai-public.creatie.ai/gen_page/tailwind-custom.css" rel="stylesheet"/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.6.0/glide.min.js"></script>
<script src="https://cdn.tailwindcss.com/3.4.5?plugins=forms@0.5.7,typography@0.5.13,aspect-ratio@0.4.2,container-queries@0.1.1"></script><script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
<script src="https://ai-public.creatie.ai/gen_page/tailwind-config.min.js" data-color="#000000" data-border-radius="small"></script>
</head>
<body className="font-[&#39;Poppins&#39;] bg-gray-50">
<header className="fixed w-full bg-white shadow-sm z-50">
  <nav className="max-w-8xl mx-auto">
    <div className="flex items-center justify-between px-6 py-4">
      <div className="flex items-center space-x-16">
        <a href="#" className="flex-shrink-0">
          <img src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png" alt="Premium Footwear" className="h-8"/>
        </a>
        <div className="hidden lg:flex items-center space-x-8 relative">
      <a
        href="#"
        className="text-gray-700 hover:text-custom font-medium"
        onClick={(e) => {
          e.preventDefault();
          handleNavigation("men-page");
        }}
      >
        <i className="fas fa-running mr-2"></i>Men
      </a>
      <a
        href="#"
        className="text-gray-700 hover:text-custom font-medium"
        onClick={(e) => {
          e.preventDefault();
          handleNavigation("women-page");
        }}
      >
        <i className="fas fa-female mr-2"></i>Women
      </a>
      <a
        href="#"
        className="text-gray-700 hover:text-custom font-medium"
        onClick={(e) => {
          e.preventDefault();
          handleNavigation("kids-page");
        }}
      >
        <i className="fas fa-child mr-2"></i>Kids
      </a>
      <a
        href="#"
        className="text-gray-700 hover:text-custom font-medium"
        onClick={(e) => {
          e.preventDefault();
          handleNavigation("sale-page");
        }}
      >
        <i className="fas fa-tag mr-2"></i>Sale
      </a>
    </div>
      </div>
      
      <div className="flex items-center space-x-8">
        <div className="hidden lg:block relative">
          <input type="text" placeholder="Search products..." className="w-64 pl-10 pr-4 py-2 border border-gray-200 rounded-button focus:outline-none focus:border-custom"/>
          <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#" className="text-gray-700 hover:text-custom">
            <i className="far fa-user text-xl"></i>
          </a>
          <a href="#" className="text-gray-700 hover:text-custom relative" 
          // onclick="document.querySelector(&#39;#cart-overlay&#39;).classNameList.remove(&#39;hidden&#39;); return false;"
          >
            <i className="fas fa-shopping-bag text-xl"></i>
            <span className="absolute -top-2 -right-2 bg-custom text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
          </a>
        </div>
      </div>
    </div>
  </nav>
</header>
<main className="pt-20">
  <section className="relative h-[600px] overflow-hidden"><div id="three-container" className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none"></div>
    <div className="glide">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          <li className="glide__slide relative">
            <img src="https://creatie.ai/ai/api/search-image?query=A premium luxury sneaker collection displayed in a minimalist setting with soft lighting and clean white background, featuring high-end leather materials and modern design elements&width=1440&height=600&orientation=landscape&flag=c863f09f-adc3-4fef-a928-5f05d51e9245&flag=77d3961d-2610-4574-aeb7-c044f6cf6fee&flag=6a14aac7-e4be-4540-a59a-5379714ddf57&flag=519b3f1e-b9f3-4316-bbcd-c410ee1ae736&flag=3cfa6b68-08d1-4454-939c-173e41807f4d&flag=4a8c5e5e-0aef-4099-a886-8fba80d1b7a7&flag=8e7af768-3c0a-4281-b1c5-e3b001d8cd49" alt="Premium Collection" className="w-full h-[600px] object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center">
              <div className="max-w-8xl mx-auto px-6">
                <h1 className="text-5xl font-bold text-white mb-6">Premium Collection 2024</h1>
                <p className="text-xl text-white/90 mb-8 max-w-xl">Discover our latest collection of luxury footwear, crafted with precision and style for the modern individual.</p>
                <button className="bg-custom text-white px-8 py-3 !rounded-button font-medium hover:bg-custom/90 transition-colors">Shop Now</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="glide__bullets" data-glide-el="controls[nav]">
        <button className="glide__bullet" data-glide-dir="=0"></button>
        <button className="glide__bullet" data-glide-dir="=1"></button>
        <button className="glide__bullet" data-glide-dir="=2"></button>
      </div>
    </div>
  </section>
  <section className="py-16 bg-white">
    <div className="max-w-8xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-12">New Arrivals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="group bg-white rounded-lg hover:shadow-xl transition-shadow duration-300">
          <div className="relative overflow-hidden rounded-t-lg"><div className="absolute top-2 left-2 z-10"><span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">25% OFF</span></div>
            <img src="https://creatie.ai/ai/api/search-image?query=A luxurious leather sneaker with minimalist design on pure white background, showcasing premium materials and craftsmanship with subtle lighting&width=400&height=400&orientation=squarish&flag=f73a6c85-9020-49ee-b625-2779f766971b&flag=64a769f1-bbb2-4320-9df3-68946d4499b8&flag=7f3370ff-9e3f-414c-9f11-ccec17d55f44&flag=91767cc0-8950-4276-a6b9-109a73eb7e62&flag=3cc69656-aa83-4897-b155-c45113df9887&flag=6bba059d-e535-408c-9d9d-c02ac03a2a73&flag=20155b72-3327-432f-8967-9f1a64d60303" alt="Luxury Sneaker" className="w-full h-80 object-cover transition-transform group-hover:scale-105"/>
            <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 text-white px-6 py-2 !rounded-full font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black">Quick View</button>
          <div className="absolute top-2 right-2 z-10"><button className="bg-white/80 hover:bg-white p-2 rounded-full transition-colors"><i className="far fa-heart text-gray-800"></i></button></div></div>
          <div className="p-4">
            <h3 className="text-lg font-medium text-gray-900">Premium Leather Sneaker</h3>
            <div className="flex items-center mt-2">
              <div className="flex text-yellow-400">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <span className="ml-2 text-sm text-gray-500">(48 reviews)</span>
            </div>
            <p className="mt-2 text-lg font-medium text-custom"><span className="text-xl font-bold text-custom">$299.00</span> <span className="text-sm text-gray-500 line-through ml-2">$399.00</span></p>
          <div className="flex items-center justify-between mt-4"><div className="flex items-center space-x-2"><span className="w-4 h-4 rounded-full bg-black border-2 border-gray-300 cursor-pointer"></span><span className="w-4 h-4 rounded-full bg-red-600 border-2 border-gray-300 cursor-pointer"></span><span className="w-4 h-4 rounded-full bg-blue-600 border-2 border-gray-300 cursor-pointer"></span></div><button className="bg-custom text-white px-4 py-2 rounded-full hover:bg-custom/90 transition-colors">Add to Cart</button></div></div>
        </div>
        
        <div className="group bg-white rounded-lg hover:shadow-xl transition-shadow duration-300">
          <div className="relative overflow-hidden">
            <img src="https://creatie.ai/ai/api/search-image?query=An elegant white leather sneaker with gold accents on pure white background, emphasizing luxury details and clean lines&width=400&height=400&orientation=squarish&flag=d5e98478-f81f-46f5-aae0-3c56ef7eba45&flag=72a3c4e8-9aac-4815-b20f-5fb5c9ab138c&flag=f9e9a8c4-7a77-4b6e-bf0b-cc359a7799de&flag=82f5c81d-3834-4c74-bed1-20ecf17c5531&flag=e1d09fbc-ce3a-43fe-a712-91ce94906133&flag=5b8e972a-568d-491f-81a9-8a464b7138d8&flag=a3f25edd-d43c-4cc9-8a3e-31cdb4e7633d" alt="White Sneaker" className="w-full h-80 object-cover transition-transform group-hover:scale-105"/>
            <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-gray-900 px-6 py-2 !rounded-button font-medium opacity-0 group-hover:opacity-100 transition-opacity">Quick View</button>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-medium text-gray-900">classNameic White Edition</h3>
            <div className="flex items-center mt-2">
              <div className="flex text-yellow-400">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <span className="ml-2 text-sm text-gray-500">(36 reviews)</span>
            </div>
            <p className="mt-2 text-lg font-medium text-custom">$259.00</p>
          </div>
        </div>
        <div className="group bg-white rounded-lg hover:shadow-xl transition-shadow duration-300">
          <div className="relative overflow-hidden">
            <img src="https://creatie.ai/ai/api/search-image?query=A sophisticated black leather boot with sleek design on pure white background, highlighting premium craftsmanship and modern style&width=400&height=400&orientation=squarish&flag=40bdb36f-7dd1-4ef1-866c-86c23be5c335&flag=df75c8fe-e809-4dc6-893c-2cf73946f6ef&flag=bf32a632-7c18-4641-bb06-dfcd7394585e&flag=a89acd58-d9ca-4fb2-83e1-a21027016bc3&flag=f022ed5a-8b7f-4ddb-9b4d-55c5c21406ad&flag=02dbe69b-f34a-4b79-a9b6-edb09eff41b2&flag=60fc8285-ac60-4907-8fb2-b32b16dfe586" alt="Leather Boot" className="w-full h-80 object-cover transition-transform group-hover:scale-105"/>
            <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-gray-900 px-6 py-2 !rounded-button font-medium opacity-0 group-hover:opacity-100 transition-opacity">Quick View</button>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-medium text-gray-900">Urban Leather Boot</h3>
            <div className="flex items-center mt-2">
              <div className="flex text-yellow-400">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <span className="ml-2 text-sm text-gray-500">(52 reviews)</span>
            </div>
            <p className="mt-2 text-lg font-medium text-custom">$349.00</p>
          </div>
        </div>
        <div className="group bg-white rounded-lg hover:shadow-xl transition-shadow duration-300">
          <div className="relative overflow-hidden">
            <img src="https://creatie.ai/ai/api/search-image?query=A premium athletic running shoe with dynamic design on pure white background, showcasing advanced technology and contemporary style&width=400&height=400&orientation=squarish&flag=5316e0b9-b8fe-4e6f-98d6-d887cbd0c57f&flag=8710a0b5-664e-49ea-826e-0a5f52ad388c&flag=6f4584a8-8131-4f3d-bfb8-8889a05e6106&flag=25659d79-13dc-4af5-9d4a-609aa0d9201e&flag=8b6a6faa-1643-4e5b-a074-eef7ba8d331c&flag=a6717725-741f-446e-a6d4-59b077a1550c&flag=32ff1f03-044d-4b90-95b0-0fe5b30fa5a2" alt="Athletic Shoe" className="w-full h-80 object-cover transition-transform group-hover:scale-105"/>
            <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-gray-900 px-6 py-2 !rounded-button font-medium opacity-0 group-hover:opacity-100 transition-opacity">Quick View</button>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-medium text-gray-900">Performance Runner</h3>
            <div className="flex items-center mt-2">
              <div className="flex text-yellow-400">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <span className="ml-2 text-sm text-gray-500">(64 reviews)</span>
            </div>
            <p className="mt-2 text-lg font-medium text-custom">$279.00</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-16 bg-gray-50"><section className="py-16 bg-white"><div className="max-w-8xl mx-auto px-6"><h2 className="text-3xl font-bold text-gray-900 mb-12">Featured Collections</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><div className="relative overflow-hidden rounded-lg shadow-lg group"><img src="https://creatie.ai/ai/api/search-image?query=Luxury athletic shoes collection displayed elegantly&width=600&height=400&flag=8a9a61a5-439a-43c3-81e8-458f49d7486a&flag=43899e02-54bc-4e2d-8fa5-7c0b4cf44c95&flag=507fa1c4-7854-4e5a-bb56-72f61cf5b91a&flag=d6eab663-685a-4d14-bb4f-a9906ed44d4e&flag=6c2464b9-8208-4d3e-b218-09bb09121f0b&flag=43242536-e612-48db-84e2-098d2568b191" alt="Athletic Collection" className="w-full h-64 object-cover transition-transform group-hover:scale-105"/><div className="absolute inset-0 bg-black/50 flex items-center justify-center"><div className="text-center"><h3 className="text-2xl font-bold text-white mb-4">Athletic Collection</h3><button className="bg-white text-gray-900 px-6 py-2 rounded-button font-medium hover:bg-gray-100 transition-colors">Explore</button></div></div></div><div className="relative overflow-hidden rounded-lg shadow-lg group"><img src="https://creatie.ai/ai/api/search-image?query=Premium leather formal shoes collection&width=600&height=400&flag=922617a1-b9c3-47ae-acf8-c364e16aed60&flag=f9545337-692d-4b0d-a33e-8062e84effa9&flag=3d04cc0a-211b-4ad5-9fd0-5fe288d160b7&flag=67b22627-231f-4d48-b5e3-a93f298ec39d&flag=6bd5d124-ea82-4451-aa5c-67fa7b532983&flag=5f03fe10-1597-4d90-9328-c4b48609375d" alt="Formal Collection" className="w-full h-64 object-cover transition-transform group-hover:scale-105"/><div className="absolute inset-0 bg-black/50 flex items-center justify-center"><div className="text-center"><h3 className="text-2xl font-bold text-white mb-4">Formal Collection</h3><button className="bg-white text-gray-900 px-6 py-2 rounded-button font-medium hover:bg-gray-100 transition-colors">Explore</button></div></div></div><div className="relative overflow-hidden rounded-lg shadow-lg group"><img src="https://creatie.ai/ai/api/search-image?query=Casual lifestyle sneakers collection&width=600&height=400&flag=8943dc98-2db7-47bf-ac8d-952c3de5d5f2&flag=31c57896-347a-475c-bae8-00d87915e962&flag=781a2806-4489-4cbb-ba81-bf3c276887e3&flag=92c27889-f3b0-485f-a194-6bc6f709f1d9&flag=4774b8cc-410d-49f6-a1fd-aafab0c72309&flag=7c46dbab-3392-474b-b54a-1c2d1efefd78" alt="Casual Collection" className="w-full h-64 object-cover transition-transform group-hover:scale-105"/><div className="absolute inset-0 bg-black/50 flex items-center justify-center"><div className="text-center"><h3 className="text-2xl font-bold text-white mb-4">Casual Collection</h3><button className="bg-white text-gray-900 px-6 py-2 rounded-button font-medium hover:bg-gray-100 transition-colors">Explore</button></div></div></div></div></div></section>
    <div className="max-w-8xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Discover why thousands of customers trust us for their footwear needs.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <div className="flex text-yellow-400 mb-4">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <p className="text-gray-600 mb-6">&#34;Exceptional quality and comfort. These shoes exceeded my expectations in every way. The attention to detail is remarkable.&#34;</p>
          <div className="flex items-center">
            <img src="https://creatie.ai/ai/api/search-image?query=Professional headshot of a smiling young woman with natural makeup and business casual attire against a neutral background&width=50&height=50&orientation=squarish&flag=2beccc19-9361-4317-b77b-9c8754dffddd&flag=e38bf2c9-52a9-46c4-9859-fbba9b5e01a9&flag=1f260392-71a5-48fb-81cb-a7d093183d7b&flag=bad2910f-81e8-436c-9914-8368f78c79c5&flag=368a8539-0be0-4881-a92d-166fe5e66545&flag=cae754f2-bf75-421a-aa7a-bfaccf72f5fb&flag=d1438d2a-ce41-4476-b36d-52e0c8ebd507" alt="Sarah Johnson" className="w-12 h-12 rounded-full object-cover"/>
            <div className="ml-4">
              <h4 className="font-medium text-gray-900">Sarah Johnson</h4>
              <p className="text-sm text-gray-500">Verified Buyer</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <div className="flex text-yellow-400 mb-4">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <p className="text-gray-600 mb-6">&#34;The customer service is outstanding, and the shoes are simply perfect. I&#39;ve never been happier with a footwear purchase.&#34;</p>
          <div className="flex items-center">
            <img src="https://creatie.ai/ai/api/search-image?query=Professional headshot of a middle-aged man with a warm smile wearing a business suit against a neutral background&width=50&height=50&orientation=squarish&flag=07a8b181-0c03-41d2-ad4f-5669458e0f9c&flag=a35e9954-5e47-4d1b-915d-a51bf44cdb01&flag=df99c282-ae80-44dc-bf5b-62e2bbbbc5b2&flag=1cd39ae1-e6a9-463b-a1c3-21ad65c9cb43&flag=89361476-2d3d-44ec-97bf-7aadae9d440b&flag=83d9cd18-dd4c-4ca3-8ec4-0c66aadec97b&flag=65e16647-6465-4f96-a139-e67139c072ec" alt="Michael Chen" className="w-12 h-12 rounded-full object-cover"/>
            <div className="ml-4">
              <h4 className="font-medium text-gray-900">Michael Chen</h4>
              <p className="text-sm text-gray-500">Verified Buyer</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <div className="flex text-yellow-400 mb-4">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <p className="text-gray-600 mb-6">&#34;Premium quality shoes that are worth every penny. The comfort and style are unmatched. Will definitely buy again.&#34;</p>
          <div className="flex items-center">
            <img src="https://creatie.ai/ai/api/search-image?query=Professional headshot of a young man with a confident smile wearing smart casual attire against a neutral background&width=50&height=50&orientation=squarish&flag=8d014e5c-93d9-4ffa-a0b1-0d5a2c1fd517&flag=6e304c57-1dfe-4af8-91ae-1a8c2c5b80db&flag=65c3a0be-e26c-40b8-9fa2-101d3febd033&flag=d5654083-f1c0-44f8-8791-77e6de32040c&flag=afc9cc76-be2f-481b-97d1-1f1b5989142f&flag=41f95135-358f-473b-8a8b-52d4611282b8&flag=d0f91e60-b6fd-48fe-8508-693fda6c5a63" alt="James Wilson" className="w-12 h-12 rounded-full object-cover"/>
            <div className="ml-4">
              <h4 className="font-medium text-gray-900">James Wilson</h4>
              <p className="text-sm text-gray-500">Verified Buyer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-16 bg-custom">
    <div className="max-w-8xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="text-white mb-8 lg:mb-0">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-white/90">Stay updated with our latest collections and exclusive offers.</p>
        </div>
        <div className="w-full lg:w-auto">
          <form className="flex flex-col sm:flex-row gap-4">
            <input type="email" placeholder="Enter your email" className="px-6 py-3 !rounded-button w-full sm:w-80 focus:outline-none"/>
            <button type="submit" className="bg-white text-custom px-8 py-3 !rounded-button font-medium hover:bg-gray-100 transition-colors">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</main><div id="sale-page" className="hidden pt-20"><section className="py-16 bg-white"><div className="max-w-8xl mx-auto px-6"><div className="bg-red-100 p-6 rounded-lg mb-8"><h2 className="text-3xl font-bold text-red-600 mb-2">Special Sale</h2><p className="text-gray-700">Up to 50% off on selected items</p></div><div className="flex gap-6 mb-12"><button className="px-4 py-2 bg-custom text-white rounded-button">All Sales</button><button className="px-4 py-2 hover:bg-gray-100 rounded-button">Men</button><button className="px-4 py-2 hover:bg-gray-100 rounded-button">Women</button><button className="px-4 py-2 hover:bg-gray-100 rounded-button">Kids</button></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div></div></section></div><div id="kids-page" className="hidden pt-20"><section className="py-16 bg-white flex"><div className="max-w-8xl mx-auto px-6"><h2 className="text-3xl font-bold text-gray-900 mb-8">Kids&#39; Collection</h2><div className="flex gap-6 mb-12"><button className="px-4 py-2 bg-custom text-white rounded-button">All</button><button className="px-4 py-2 hover:bg-gray-100 rounded-button">Boys</button><button className="px-4 py-2 hover:bg-gray-100 rounded-button">Girls</button><button className="px-4 py-2 hover:bg-gray-100 rounded-button">Toddlers</button></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"><div className="bg-white rounded-lg shadow-sm group hover:shadow-xl transition-all"><div className="relative overflow-hidden"><img src="https://creatie.ai/ai/api/search-image?query=Kids colorful sneakers&width=400&height=400&flag=a7e4dd50-7536-47e7-8430-dbae433a9917&flag=5beabc11-96fd-478a-a03d-b1f6f40d7b73" className="w-full h-80 object-cover transition-transform group-hover:scale-105" alt="Kids Sneakers"/><div className="absolute top-2 left-2"><span className="bg-green-500 text-white px-2 py-1 rounded-full text-sm">New</span></div></div><div className="p-4"><h3 className="text-lg font-medium">Fun Kids Sneakers</h3><p className="text-custom font-medium mt-2">$79.00</p><button className="mt-4 w-full bg-custom text-white py-2 rounded-button hover:bg-custom/90">Add to Cart</button></div></div></div></div></div></section></div><div id="women-page" className="hidden pt-20"><section className="py-16 bg-white flex"><div className="max-w-8xl mx-auto px-6"><div className="w-64 bg-white/80 backdrop-blur-sm border-r border-gray-100 p-6 h-[calc(100vh-5rem)] sticky top-20"><h3 className="text-lg font-semibold mb-6 text-gray-800">Categories</h3><div className="space-y-4"><div className="space-y-2"><p className="text-sm font-medium text-gray-700">Styles</p><div className="ml-2 space-y-1"><label className="flex items-center text-sm text-gray-600 hover:text-purple-600 cursor-pointer"><input type="checkbox" className="form-checkbox text-purple-600 rounded mr-2"/> Heels</label><label className="flex items-center text-sm text-gray-600 hover:text-purple-600 cursor-pointer"><input type="checkbox" className="form-checkbox text-purple-600 rounded mr-2"/> Flats</label><label className="flex items-center text-sm text-gray-600 hover:text-purple-600 cursor-pointer"><input type="checkbox" className="form-checkbox text-purple-600 rounded mr-2"/> Sneakers</label></div></div><div className="space-y-2"><p className="text-sm font-medium text-gray-700">Colors</p><div className="ml-2 space-y-1 flex flex-wrap gap-2"><span className="w-6 h-6 rounded-full bg-black cursor-pointer border-2 border-transparent hover:border-purple-400"></span><span className="w-6 h-6 rounded-full bg-red-500 cursor-pointer border-2 border-transparent hover:border-purple-400"></span><span className="w-6 h-6 rounded-full bg-blue-500 cursor-pointer border-2 border-transparent hover:border-purple-400"></span></div></div><div className="space-y-2"><p className="text-sm font-medium text-gray-700">Price Range</p><input type="range" className="w-full accent-purple-600"/></div></div></div><h2 className="text-3xl font-bold text-gray-900 mb-8">Women&#39;s Collection</h2><div className="flex gap-6 mb-12"><button className="px-4 py-2 bg-custom text-white rounded-button">All</button><button className="px-4 py-2 hover:bg-gray-100 rounded-button">Heels</button><button className="px-4 py-2 hover:bg-gray-100 rounded-button">Flats</button><button className="px-4 py-2 hover:bg-gray-100 rounded-button">Sneakers</button><button className="px-4 py-2 hover:bg-gray-100 rounded-button">Boots</button></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"><div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm group hover:shadow-xl transition-all relative overflow-hidden"><div className="relative overflow-hidden"><img src="https://creatie.ai/ai/api/search-image?query=Elegant women heels&width=400&height=400&flag=45d4145c-a5bc-4d12-82cf-85b7b48679d1&flag=9bb60d48-532e-4b44-90f1-ba6451ed5fd0" className="w-full h-80 object-cover transition-transform group-hover:scale-105" alt="Heels"/><div className="absolute top-2 left-2"><span className="bg-red-500 text-white px-2 py-1 rounded-full text-sm">-20%</span></div></div><div className="p-4"><h3 className="text-lg font-medium">Elegant Evening Heels</h3><p className="text-custom font-medium mt-2">$159.00</p><button className="absolute bottom-4 right-4 w-10 h-10 bg-purple-600/90 text-white rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"><i className="fas fa-shopping-cart text-lg"></i></button></div></div></div></div></div></section></div><div id="men-page" className="hidden pt-20"><section className="py-16 bg-white flex"><div className="max-w-8xl mx-auto px-6"><h2 className="text-3xl font-bold text-gray-900 mb-8">Men&#39;s Collection</h2><div className="flex gap-6 mb-12"><button className="px-4 py-2 bg-custom text-white rounded-button">All</button><button className="px-4 py-2 hover:bg-gray-100 rounded-button">Sneakers</button><button className="px-4 py-2 hover:bg-gray-100 rounded-button">Formal</button><button className="px-4 py-2 hover:bg-gray-100 rounded-button">Boots</button><button className="px-4 py-2 hover:bg-gray-100 rounded-button">Running</button></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"><div className="bg-white rounded-lg shadow-sm group hover:shadow-xl transition-all"><div className="relative overflow-hidden"><img src="https://creatie.ai/ai/api/search-image?query=Luxury men leather shoes&width=400&height=400&flag=c0a70026-0ecc-4b39-9bce-c7902598df6a&flag=427d03a8-482e-4b12-9bbf-fc3c23dcaeb5" className="w-full h-80 object-cover transition-transform group-hover:scale-105" alt="Formal Shoes"/><div className="absolute top-2 right-2"><button className="bg-white/80 p-2 rounded-full hover:bg-white"><i className="far fa-heart"></i></button></div></div><div className="p-4"><h3 className="text-lg font-medium">classNameic Oxford Shoes</h3><p className="text-custom font-medium mt-2">$249.00</p><button className="mt-4 w-full bg-custom text-white py-2 rounded-button hover:bg-custom/90">Add to Cart</button></div></div></div></div></div></section></div>
</body>
<footer className="bg-gray-900 text-white pt-16 pb-8">
  <div className="max-w-8xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
      <div>
        <img src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png" alt="Premium Footwear" className="h-8 mb-6"/>
        <p className="text-gray-400">Crafting premium footwear for those who appreciate quality and style.</p>
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-6">Quick Links</h3>
        <ul className="space-y-4">
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Size Guide</a></li>
        </ul>
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-6">Customer Service</h3>
        <ul className="space-y-4">
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping Info</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Returns</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Order Status</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Payment Methods</a></li>
        </ul>
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-6">Connect With Us</h3>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <i className="fab fa-facebook-f text-xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <i className="fab fa-instagram text-xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <i className="fab fa-pinterest text-xl"></i>
          </a>
        </div>
      </div>
    </div>
    
    <div className="border-t border-gray-800 pt-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2024 Premium Footwear. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
        </div>
      </div>
    </div>
  </div>
</footer>
{/* <script> */}
{/* new Glide('.glide', {
  type: 'carousel',
  startAt: 0,
  perView: 1,
  autoplay: 5000
}).mount(); */}
{/* </script><script>
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('three-container').appendChild(renderer.domElement);
const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);
camera.position.z = 30;
function animate() {
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});</script> */}
<div id="cart-overlay" className="hidden fixed inset-0 bg-black bg-opacity-50 z-50"><div className="fixed right-0 top-0 h-full w-full md:w-[480px] bg-white shadow-xl"><div className="p-6 h-full flex flex-col"><div className="flex justify-between items-center mb-6"><h2 className="text-2xl font-bold">Shopping Cart (3)</h2><button onclick="this.closest(&#34;#cart-overlay&#34;).classNameList.add(&#34;hidden&#34;)" className="text-gray-400 hover:text-gray-600"><i className="fas fa-times text-xl"></i></button></div><div className="flex-1 overflow-y-auto"><div className="space-y-6"><div className="flex gap-4 p-4 bg-gray-50 rounded-lg"><img src="https://creatie.ai/ai/api/search-image?query=Premium leather sneaker white background&width=120&height=120&flag=b28d9277-7038-47b2-96a8-779a606e44a0&flag=88e803c0-123f-439f-be99-da9f55d23d47" className="w-24 h-24 object-cover rounded" alt="Product"/><div className="flex-1"><div className="flex justify-between"><h3 className="font-medium">Premium Leather Sneaker</h3><button className="text-gray-400 hover:text-red-500"><i className="fas fa-trash"></i></button></div><p className="text-gray-500 text-sm">Size: 42 | Color: Black</p><div className="flex justify-between items-center mt-2"><div className="flex items-center gap-2"><button className="w-6 h-6 rounded-full border flex items-center justify-center hover:bg-gray-100">-</button><input type="number" value="1" className="w-12 text-center border-none"/><button className="w-6 h-6 rounded-full border flex items-center justify-center hover:bg-gray-100">+</button></div><span className="font-medium">$299.00</span></div></div></div></div></div><div className="border-t pt-4 mt-4"><div className="space-y-2 mb-4"><div className="flex justify-between"><span className="text-gray-600">Subtotal</span><span className="font-medium">$897.00</span></div><div className="flex justify-between"><span className="text-gray-600">Shipping</span><span className="font-medium">Free</span></div><div className="flex justify-between text-lg font-bold"><span>Total</span><span>$897.00</span></div></div><button className="w-full bg-custom text-white py-3 rounded-button font-medium hover:bg-custom/90">Checkout</button></div></div></div></div>
</>
  )
}



export default homePage
import { Button } from '@/components/ui/button'
import React from 'react'
import AssetTable from './AssetTable'
import CoinChart from './CoinChart'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { DotIcon } from '@radix-ui/react-icons'
import { MessageCircle } from 'lucide-react'

const Home = () => {

	const [category, setCategory] = React.useState("all")

	const handleCategory = (category) => {
		setCategory(category)
	}

	return (
		<div className='relative'>
			<div className="lg:flex">
				<div className="lg:w-[50%] lg:border-r">

					<div className="p-3 flex items-center gap-4">
						<Button onClick={() => handleCategory("all")} variant={category == "all" ? "default" : "outline"} className="rounded-full">All</Button>
						<Button onClick={() => handleCategory("top50")} variant={category == "top50" ? "default" : "outline"} className="rounded-full">Top 50</Button>
						<Button onClick={() => handleCategory("topGainers")} variant={category == "topGainers" ? "default" : "outline"} className="rounded-full">Top Gainers</Button>
						<Button onClick={() => handleCategory("topLosers")} variant={category == "topLosers" ? "default" : "outline"} className="rounded-full">Top Losers</Button>
					</div>
					<AssetTable />
				</div>
				<div className="hidden lg:block lg:w-[50%] p-5">
					<CoinChart />
					<div className="flex gap-5 items-center">
						<div>
							<Avatar>
								<AvatarImage src="https://coin-images.coingecko.com/coins/images/279/small/ethereum.png?1696501628" />
							</Avatar>
						</div>
						<div>
							<div className="flex items-center gap-2">
								<p>ETH</p>
								<DotIcon className='"text-gray-400"' />
								<p className="text-gray-400">Ethereum</p>
							</div>
							<div className="flex items-end gap-2">
								<p className='text-xl font-bold'>$10,000</p>
								<p className='text-red-600'>
									<span>-1319049822.578</span>
									<span>(-0.29803%)</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Chat Bot Button with fixed position */}
			<section className='fixed bottom-5 right-5 z-40 flex flex-col justify-end items-end gap-2'>
				<div className='relative w-[10rem] cursor-pointer group'>
					<Button className="w-full h-[3rem] gap-2 items-center">
						<MessageCircle size={30} className='fill-[#1E293B] -rotate-90 -stroke-none group-hover:fill-[#1a1a1a]' />
						<span className='text-2xl'>Chat Bot</span>
					</Button>
				</div>
			</section>
		</div>
	)
}

export default Home

import { Toaster as Sonner } from '@/components/ui/sonner'
import { Toaster } from '@/components/ui/toaster'
import { TooltipProvider } from '@/components/ui/tooltip'
import Cart from '@/pages/Cart'
import Index from '@/pages/Index'
import NotFound from '@/pages/NotFound'
import Products from '@/pages/Products'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const queryClient = new QueryClient()

const App = () => (
	<QueryClientProvider client={queryClient}>
		{/*
		<Snowfall
			color='#fff'
			style={{
				zIndex: 100,
				position: 'fixed',
			}}
		/>
		*/}
		<TooltipProvider>
			<Toaster />
			<Sonner />
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Index />} />
					<Route path='/products' element={<Products />} />
					<Route path='/cart' element={<Cart />} />

					{/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
					<Route path='*' element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</TooltipProvider>
	</QueryClientProvider>
)

export default App

import { SearchProvider } from "@/components/Category/SearchContext";
import Container from "@/components/Container";
import Content from "@/components/Content/Content";
import Settings from "@/components/Settings/Settings";
import Sidebar from "@/components/sidebar/Sidebar";


export default function page() {
  return (
    <SearchProvider>
    <Container>
      <div className='lg:flex justify-between py-4 '>
        <Sidebar />
        {/* <MenuBar/> */}
        {/* main body with navbar */}
        <div className='w-full'>
          <Content />
        </div>
        {/* settings */}
        <Settings />
      </div>
    </Container>
  </SearchProvider>
  )
}

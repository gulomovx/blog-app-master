"use client";
import BlogList from "@/components/BlogList";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <BlogList />
      <Footer/>
    </main>
  );
}

import Slide from "../components/slide";

export default function Content() {
    const items = [
        {id: 1, title: "Lpk", image: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {id: 2, title: "Pelatihan", image: "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {id: 3, title: "Kerjasama", image: "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {id: 4, title: "Dokumentasi", image: "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=600"}
    ];

    return (
        <section className="py-16 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 bg-gray-50 dark:bg-gray-900">
            {items.map((item) => (
                <Slide key={item.id} id={item.id} title={item.title} image={item.image} />
            ))}
        </section>
    );
}

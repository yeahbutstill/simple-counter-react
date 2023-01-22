const person = {
    name: 'Dani',
    address: {
        line1: "123",
        city: "Depok",
        prov: "Jawa Barat",
        country: "Indonesia"
    },
    profiles: ['twitter', 'facebook', 'linkedin', 'instagram'],
    printProfile: () => {
        person.profiles.map(
            profile => console.log(profile)
        )
    },
    age: 29
}

export default function LearningJavaScript() {
    return (
        <>
            <div>LearningJavaScript</div>
            <div>{person.name}</div>
            <div>{person.address.city}</div>
            <div>{person.age}</div>
            <div>{person.profiles[0]}</div>
            <div>{person.printProfile()}</div>
        </>
    );
}
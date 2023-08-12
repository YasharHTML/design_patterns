interface Doctor {
    speak(): string;
    type: "MD" | "DO";
}

class MDDoctor implements Doctor {
    speak(): string {
        return this.type;
    }
    type: "MD" | "DO" = "MD";
}

class DODoctor implements Doctor {
    speak(): string {
        return this.type;
    }
    type: "MD" | "DO" = "DO";
}

interface DoctorFactory {
    createDoctor(): Doctor;
}

class MDDoctorFactory implements DoctorFactory {
    createDoctor(): Doctor {
        return new MDDoctor();
    }
}

class DODoctorFactory implements DoctorFactory {
    createDoctor(): Doctor {
        return new DODoctor();
    }
}

let doctorFactory: DoctorFactory;

doctorFactory = new MDDoctorFactory();
console.log(doctorFactory.createDoctor().speak());

doctorFactory = new DODoctorFactory();
console.log(doctorFactory.createDoctor().speak());

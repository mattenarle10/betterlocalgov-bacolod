import { Phone, Mail } from 'lucide-react';

interface Department {
  name: string;
  head: string;
  phone?: string;
  email?: string;
}

interface DepartmentGroup {
  title: string;
  departments: Department[];
}

const departmentGroups: DepartmentGroup[] = [
  {
    title: 'Executive Offices',
    departments: [
      {
        name: "City Mayor's Office",
        head: 'Hon. Greg Gasataya',
        phone: '(034) 435-5879',
        email: 'mayorggasataya@bacolodcity.gov.ph',
      },
      {
        name: 'City Administrator',
        head: 'Atty. Mark Steven Mayo',
        phone: '(034) 707-433-6191',
        email: 'cmo_admin@bacolodcity.gov.ph',
      },
      {
        name: 'City Legal Office',
        head: 'Atty. Karol Joseph P. Chiu',
        phone: '(034) 708-8208',
        email: 'clo@bacolodcity.gov.ph',
      },
    ],
  },
  {
    title: 'Finance & Administration',
    departments: [
      {
        name: 'City Treasurer',
        head: 'Jose Maria Gecosala',
        phone: '(034) 435-0785',
        email: 'cto_admin@bacolodcity.gov.ph',
      },
      {
        name: 'City Assessor',
        head: 'Atty. Maphilindo Polvora',
        phone: '(034) 709-0353',
        email: 'cityassessor@bacolodcity.gov.ph',
      },
      {
        name: 'City Accountant',
        head: 'Atty. Jeremae Ann Ceriaco (Acting)',
        phone: '(034) 433-8286',
        email: 'accountant@bacolodcity.gov.ph',
      },
      {
        name: 'City Budget Office',
        head: 'Maria Imelda A. Williams',
        phone: '(034) 709-1766',
        email: 'citybudget@bacolodcity.gov.ph',
      },
      {
        name: 'Human Resource (HRMS)',
        head: 'Erman A. Aguirre',
        phone: '(034) 432-0664',
        email: 'hrms@bacolodcity.gov.ph',
      },
      {
        name: 'General Services (GSO)',
        head: 'Victor Espina (OIC)',
        phone: '(034) 435-6067',
        email: 'gso@bacolodcity.gov.ph',
      },
    ],
  },
  {
    title: 'Planning & Economic Development',
    departments: [
      {
        name: 'City Planning (CPDO)',
        head: 'Mary Jean L. Ramos',
        phone: '(034) 434-3184',
        email: 'cpdo@bacolodcity.gov.ph',
      },
      {
        name: 'Economic Development (LEDIPO)',
        head: 'Mae Ferrer-Llamas, PhD',
        email: 'bcdledipoffice@bacolodcity.gov.ph',
      },
      {
        name: 'PESO',
        head: 'Mae Ferrer-Llamas, PhD',
        email: 'peso@bacolodcity.gov.ph',
      },
    ],
  },
  {
    title: 'Health & Social Services',
    departments: [
      {
        name: 'City Health Office',
        head: 'Dr. Ma. Carmela P. Gensoli',
        phone: '(034) 431-3673',
        email: 'cho@bacolodcity.gov.ph',
      },
      {
        name: 'Social Services (DSSD)',
        head: 'Sally Abelarde (OIC)',
        phone: '(034) 432-1602',
        email: 'dssd@bacolodcity.gov.ph',
      },
      {
        name: 'Population Office',
        head: 'Mrs. Gilda F. Lluisma (Acting)',
        phone: '(034) 708-7366',
        email: 'popcom@bacolodcity.gov.ph',
      },
    ],
  },
  {
    title: 'Infrastructure & Environment',
    departments: [
      {
        name: 'City Engineer (CEO)',
        head: 'Engr. Luben Rafael D. Ceballos (OIC)',
        phone: '(034) 432-3098',
        email: 'ceo@bacolodcity.gov.ph',
      },
      {
        name: 'Building Official (OBO)',
        head: 'Isidro Sun, Jr. (OIC)',
        phone: '(034) 433-8286',
        email: 'obo@bacolodcity.gov.ph',
      },
      {
        name: 'Environment (ENRO)',
        head: 'Ramel Palalon (OIC)',
        phone: '0995-187-4725',
        email: 'enrobcd@bacolodcity.gov.ph',
      },
      {
        name: 'Public Services (DPS)',
        head: 'Ramel M. Palalon (OIC)',
        phone: '(034) 708-1755',
        email: 'dps@bacolodcity.gov.ph',
      },
    ],
  },
  {
    title: 'Public Safety',
    departments: [
      {
        name: 'DRRMO',
        head: 'Dr. Anna Maria Laarni Pornan',
        phone: '(034) 432-3871',
        email: 'drrmobacolodcity@yahoo.com',
      },
      {
        name: 'Traffic (BTTMD)',
        head: 'Atty. Reuben Mikhail P. Sabig (OIC)',
        email: 'bttmd@bacolodcity.gov.ph',
      },
      {
        name: 'Bureau of Fire Protection',
        head: 'Chief Inspector Rodel Legaspi (OIC)',
        phone: '(034) 434-5022',
        email: 'bacolodcityfs@bacolodcity.gov.ph',
      },
    ],
  },
  {
    title: 'Business & Permits',
    departments: [
      {
        name: 'Business Permits (BPLO)',
        head: 'Stela Rose J. Rayos',
        email: 'bplo@bacolodcity.gov.ph',
      },
      {
        name: 'Bids and Awards (BAC)',
        head: 'Atty. Hermilo B. Pa-oyon',
        phone: '(034) 707-0008',
        email: 'bac@bacolodcity.gov.ph',
      },
    ],
  },
  {
    title: 'Agriculture & Veterinary',
    departments: [
      {
        name: 'City Agriculture',
        head: 'Maricar P. Quiro (OIC)',
        email: 'cityagri@bacolodcity.gov.ph',
      },
      {
        name: 'City Veterinary',
        head: 'Dr. Maria Agueda Trinidad F. dela Torre',
        phone: '0921-602-9525',
        email: 'cityvet@bacolodcity.gov.ph',
      },
    ],
  },
  {
    title: 'Records & Information',
    departments: [
      {
        name: 'Civil Registrar',
        head: 'Atty. Hermilo Pao-yon',
        phone: '(034) 435-4790',
        email: 'lcr@bacolodcity.gov.ph',
      },
      {
        name: 'City Library',
        head: 'Greta K. Memoria',
        phone: '(034) 434-4448',
        email: 'citylib@bacolodcity.gov.ph',
      },
      {
        name: 'IT Services (MITCS)',
        head: 'Ramon C. de los Reyes (Acting)',
        phone: '(034) 435-4168',
        email: 'mitcs@bacolodcity.gov.ph',
      },
      {
        name: 'Public Information',
        head: 'Angelo Angolo (OIC)',
        email: 'bacolodcitycommunicationsoffice@bacolodcity.gov.ph',
      },
    ],
  },
  {
    title: 'Housing & Community',
    departments: [
      {
        name: 'Housing Authority (BHA)',
        head: 'Ma. Victoria Parreñas',
        phone: '(034) 433-7108',
        email: 'bha@bacolodcity.gov.ph',
      },
      {
        name: 'Cooperative & Livelihood (CCLDO)',
        head: 'Brenda C. Burdeos',
        phone: '(034) 469-3768',
        email: 'coop@bacolodcity.gov.ph',
      },
      {
        name: 'Tourism Office',
        head: 'Teresa Q. Manalili',
        phone: '(034) 469-6062',
        email: 'tourism@bacolodcity.gov.ph',
      },
    ],
  },
  {
    title: 'Education & Youth',
    departments: [
      {
        name: 'Bacolod City College',
        head: 'Ma. Johanna Anne R. Bayoneta',
        phone: '(034) 707-7469',
        email: 'bcc@bacolodcity.gov.ph',
      },
      {
        name: 'Youth Development (BCYDO)',
        head: 'Carlo S. Descutido (OIC)',
        phone: '(034) 471-0308',
        email: 'bcydo6100@gmail.com',
      },
    ],
  },
];

export default function DepartmentsSection() {
  return (
    <div className="space-y-6">
      {departmentGroups.map((group, gi) => (
        <section key={gi}>
          <h2 className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-300 uppercase tracking-wide">
            {group.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {group.departments.map((dept, di) => (
              <div
                key={di}
                className="bg-white border border-gray-300 rounded-lg p-3 hover:border-primary-400 hover:shadow-sm transition-all"
              >
                <h3 className="font-medium text-gray-900 text-sm">
                  {dept.name}
                </h3>
                <p className="text-xs text-gray-600 mt-1">{dept.head}</p>
                <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-700">
                  {dept.phone && (
                    <span className="flex items-center gap-1">
                      <Phone className="h-3 w-3 text-primary-500" />
                      {dept.phone}
                    </span>
                  )}
                  {dept.email && (
                    <span className="flex items-center gap-1 truncate">
                      <Mail className="h-3 w-3 text-primary-500" />
                      <span className="truncate">
                        {dept.email.replace('@bacolodcity.gov.ph', '@...')}
                      </span>
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      <p className="text-xs text-gray-500 pt-4 border-t border-gray-200">
        Source: bacolodcity.gov.ph/departments
      </p>
    </div>
  );
}

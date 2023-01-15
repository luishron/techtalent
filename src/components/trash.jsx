const handleFilter = () => {
  // Crea una copia de los trabajos
  let filtered = [...jobs];
  // Filtra los trabajos por cada filtro activo
  activeFilters.forEach((filter) => {
    if (filter.name === "search") {
      filtered = filtered.filter(
        (job) =>
          job.position.toLowerCase().includes(filter.value.toLowerCase()) ||
          job.company.toLowerCase().includes(filter.value.toLowerCase())
      );
    } else if (filter.name === "location") {
      filtered = filtered.filter((job) => job.location === filter.value);
    } else if (filter.name === "type") {
      filtered = filtered.filter((job) => job.employment_type === filter.value);
    } else if (filter.name === "workSetting") {
      filtered = filtered.filter((job) => job.work_setting === filter.value);
    }
  });

  // Actualiza el estado con los trabajos filtrados
  setFilteredJobs(filtered);
};

const [searchValue, setSearchValue] = useState("");
const [locationValue, setLocationValue] = useState("");
const [typeValue, setTypeValue] = useState("");
const [workSettingValue, setWorkSettingValue] = useState("");

const [activeFilters, setActiveFilters] = useState([]);
const [filteredJobs, setFilteredJobs] = useState(jobs);

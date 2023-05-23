export const handleClick = (
    id: string,
    selected: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>,
) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
};

export const handleSelectAllClick = (
    event: React.ChangeEvent<HTMLInputElement>,
    setSelected: React.Dispatch<React.SetStateAction<string[]>>,
    items: any,
) => {
    if (event.target.checked) {
        const newSelecteds = items?.map((item) => item.id) || [];
        setSelected(newSelecteds);
        return;
    }
    setSelected([]);
};

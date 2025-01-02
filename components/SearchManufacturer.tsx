"use client";
import { searchManufacturerProps } from "@/types";

import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from "@headlessui/react";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { manufacturers } from "@/constants";
import clsx from "clsx";
const SearchManufacturer = ({
  selected,
  setSelected,
}: searchManufacturerProps) => {
  const [query, setQuery] = useState("");
  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  return (
    <div className="search-manufacturer">
      <Combobox
        value={selected}
        onChange={setSelected}
        onClose={() => setQuery("")}
      >
        <div className="relative w-full">
          <ComboboxButton className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="Car Logo"
            />
          </ComboboxButton>
          <ComboboxInput
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />

          <ComboboxOptions
            transition
            className={clsx(
              "w-[var(--input-width)]   [--anchor-gap:var(--spacing-1)] empty:invisible",
              "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
            )}
          >
            {filteredManufacturers.map((item) => (
              <ComboboxOption
                key={item}
                value={item}
                className="relative search-manufacturer__option data-[focus]:bg-primary-blue  text-gray-900   data-[focus]:text-white"
              >
                <div className="">{item}</div>
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;

"use client";

import { Button } from "@/components/Button";
import { HStack, styled } from "styled-system/jsx";
import SortIcon from "@/public/icons/SortIcon.svg";
import FilterIcon from "@/public/icons/FilterIcon.svg";
import { AllTopicsForFilterQueryResult } from "sanity.types";
import * as Menu from "@/components/Menu";
import { useSearchParams } from "next/navigation";
import { useQueryParamsActions } from "@/hooks/useQueryParamsActions";

export const Menus = ({
  topics,
}: {
  topics: AllTopicsForFilterQueryResult;
}) => {
  const { addQueryParam, removeQueryParam } = useQueryParamsActions();

  const searchParams = useSearchParams();
  const selectedFilter = searchParams.get("filter") || ("" as string);
  const existingValues = [...selectedFilter?.split(",")];

  const selectedSortOrder = (searchParams.get("sort") as string) || "desc";

  const isAsc = selectedSortOrder === "asc";

  return (
    <>
      <HStack>
        <Menu.Root
          onSelect={(id) => {
            const selectedValueAlreadyExits = Boolean(
              existingValues?.find(
                (existingValue) => existingValue === id.value
              )
            );

            if (selectedValueAlreadyExits) {
              const filteredValues = existingValues?.filter(
                (existingValue) => existingValue !== id.value
              );

              addQueryParam({
                name: "filter",
                value: filteredValues.join(","),
              });

              return;
            } else {
              const filterValues = [...existingValues, id.value]?.filter(
                (value) => value !== ""
              );

              addQueryParam({
                name: "filter",
                value: filterValues.join(","),
              });
            }
          }}
        >
          <Menu.Trigger asChild>
            <Button variant="outline" bgColor="white">
              <FilterIcon />
              Filter by topic
            </Button>
          </Menu.Trigger>

          <Menu.Positioner>
            <Menu.Content>
              <Menu.ItemGroup id="topic">
                {topics?.map((topic) => {
                  const isActive = Boolean(
                    existingValues?.find(
                      (existingValue) => existingValue === topic.slug
                    )
                  );

                  return (
                    <Menu.OptionItem
                      key={topic?._id}
                      name="topic"
                      type="radio"
                      value={topic?.slug || ""}
                    >
                      {isActive ? (
                        <>✔️ &nbsp;</>
                      ) : (
                        <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>
                      )}
                      <styled.p>{topic?.title}</styled.p>
                    </Menu.OptionItem>
                  );
                })}
              </Menu.ItemGroup>
            </Menu.Content>
          </Menu.Positioner>
        </Menu.Root>

        <Menu.Root
          onSelect={(id) => {
            if (id.value === selectedFilter) {
              removeQueryParam("sort");
              return;
            }

            addQueryParam({
              name: "sort",
              value: id.value,
            });
          }}
        >
          <Menu.Trigger asChild>
            <Button variant="outline" bgColor="white">
              <SortIcon />
              Sort
            </Button>
          </Menu.Trigger>

          <Menu.Positioner>
            <Menu.Content>
              <Menu.ItemGroup id="group-1">
                <Menu.OptionItem name="sort" type="radio" value="asc">
                  <styled.p>
                    {isAsc ? (
                      <>✔️ &nbsp;</>
                    ) : (
                      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>
                    )}
                    Asc
                  </styled.p>
                </Menu.OptionItem>
                <Menu.OptionItem name="sort" type="radio" value="desc">
                  <styled.p>
                    {!isAsc ? (
                      <>✔️ &nbsp;</>
                    ) : (
                      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>
                    )}
                    Desc
                  </styled.p>
                </Menu.OptionItem>
              </Menu.ItemGroup>
            </Menu.Content>
          </Menu.Positioner>
        </Menu.Root>
      </HStack>
    </>
  );
};

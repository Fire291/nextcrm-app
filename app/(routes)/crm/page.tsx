import React, { Suspense } from "react";
import Link from "next/link";

import { DataTable } from "@/components/ui/data-table";
import H2Title from "@/components/typography/h2";

import { getLeads } from "@/actions/crm/get-leads";
import { getOpportunities } from "@/actions/crm/get-opportunities";

import AccountView from "./accounts/components/AccountView";
import Container from "../components/ui/Container";
import { columns } from "./components/Columns";

type Props = {};

const CrmPage = async (props: Props) => {
  const leads: any = await getLeads();
  const opportunities: any = await getOpportunities();

  return (
    <Container
      title="CRM"
      description={"Everything you need to know about sales"}
    >
      <div>
        <Suspense fallback={"Loading ..."}>
          <Link href="/crm/accounts">
            <H2Title>Accounts</H2Title>
          </Link>
          <AccountView />
        </Suspense>

        <H2Title>Leads</H2Title>
        <DataTable data={leads} search="name" columns={columns} />
        <H2Title>Opportunity</H2Title>
        <DataTable data={opportunities} search="name" columns={columns} />
      </div>
    </Container>
  );
};

export default CrmPage;

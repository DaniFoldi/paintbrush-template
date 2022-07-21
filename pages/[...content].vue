<template>
  <SidebarContainer>
    <template #sidebar-middle>
      <ContentNavigation v-slot="{ navigation }">
        <SidebarLink
          v-for="link of navigation"
          :key="link._path"
          :href="link._path"
          icon="link"
        >
          {{ link.title }}
        </SidebarLink>
      </ContentNavigation>
    </template>
    <template #sidebar-bottom>
      <Container center>
        <ThemeToggle />
      </Container>
      <PoweredBy />
    </template>
    <template #content>
      <Container article padded>
        <ContentDoc>
          <template #not-found>
            <Container>
              <Text title>
                404
              </Text>
              <Text>
                The page you are looking for does not exist.
              </Text>
              <AutoLink href="/">
                Go to the homepage
              </AutoLink>
            </Container>
          </template>
          <template #empty>
            <Text title>
              Empty document
            </Text>
          </template>
        </ContentDoc>
      </Container>
    </template>
  </SidebarContainer>
</template>

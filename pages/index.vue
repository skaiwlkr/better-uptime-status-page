<template>
  <div>
    <div class="flex px-10 mt-0 mx-auto max-w-4xl">
      <div class="w-full">
        <ul class="monitor-list list-none border-gray-light border rounded">
          <li v-for="monitor in allMonitors" v-bind:key="monitor.id" class="border-b border-gray-light last-of-type:border-b-0">
            <div v-if="monitor.attributes.status !== 'paused' || monitor.attributes.status !== 'validating'" class="monitor-holder flex p-5">
              <span class="text-base font-medium text-dark leading-none">{{ monitor.attributes.pronounceable_name }}</span>
              <span class="flex ml-auto items-center leading-none">

                <!-- Monitor is "pending" -->
                <span v-if="monitor.attributes.status === 'pending'" class="inline-block mr-1.5 h-2 w-2 rounded-full bg-warning"></span>
                <span v-if="monitor.attributes.status === 'pending'" class="text-warning font-medium">Pendiente</span>

                <!-- Monitor is "maintenance" -->
                <span v-if="monitor.attributes.status === 'maintenance'" class="inline-block mr-1.5 h-2 w-2 rounded-full bg-warning"></span>
                <span v-if="monitor.attributes.status === 'maintenance'" class="text-warning font-medium">Mantenimiento</span>

                <!-- Monitor is "up" -->
                <span v-if="monitor.attributes.status === 'up'" class="inline-block mr-1.5 h-2 w-2 rounded-full bg-success"></span>
                <span v-if="monitor.attributes.status === 'up'" class="text-success font-medium">Operativo</span>

                <!-- Monitor is "down" -->
                <span v-if="monitor.attributes.status === 'down'" class="inline-block mr-1.5 h-2 w-2 rounded-full bg-error"></span>
                <span v-if="monitor.attributes.status === 'down'" class="text-error font-medium">Inactividad</span>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  useServerSeoMeta({
    title: 'ISLAB - Estado de los servicios',
    ogTitle: 'ISLAB - Estado de los servicios',
    description: 'See on GitHub - https://status.islab.es/',
    ogDescription: 'ISLAB - Estado de los servicios',
    ogUrl: 'https://status.islab.es/',
    ogSiteName: 'ISLAB - Estado de los servicios',
    twitterCard: 'summary_large_image',
    twitterTitle: 'ISLAB - Estado de los servicios'
  })

  const runtimeConfig = useRuntimeConfig();

  const { data: allMonitorsRaw } = await useFetch(runtimeConfig.public.betterstackUrl, {
    method: 'get',
    headers: {
      Authorization: 'Bearer' + ' ' + runtimeConfig.public.betterstackToken
    }
  })

  // Transforms Impl to valuable data
  const allMonitorsValue = allMonitorsRaw.value

  // Creates access to direct object
  const allMonitors = allMonitorsValue.data

  // The status attribute can have one of the following values:
  // paused - the monitor was paused (excluded from view)
  // pending - the monitor was just created and it's waiting for the first check
  // maintenance - the monitor is paused because it is currently in its maintenance period
  // up - checks are passing
  // validating - service seems to be back up, but the recovery_period since the last failed check still hasn't passed (excluded from view)
  // down - checks are failing
  //
  // See full docs here: https://betterstack.com/docs/uptime/api/list-all-existing-monitors/
</script>

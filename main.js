window.addEventListener('DOMContentLoaded', function () { // on dom ready

  // --------------- PUT GRAPH ELEMENTS AS JSON BELOW ---------------
  const elems = {
    "nodes": [
      {
        "data": {
          "name": "admin",
          "id": "cr:admin"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "ca-controller-roles",
          "id": "cr:ca-controller-roles"
        },
        "position": {
          "x": -365.3786919403921,
          "y": -236.27839264487505
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "cluster-admin",
          "id": "cr:cluster-admin"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "edit",
          "id": "cr:edit"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "kubeadm:get-nodes",
          "id": "cr:kubeadm:get-nodes"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:aggregate-to-admin",
          "id": "cr:system:aggregate-to-admin"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:aggregate-to-edit",
          "id": "cr:system:aggregate-to-edit"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:aggregate-to-view",
          "id": "cr:system:aggregate-to-view"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:auth-delegator",
          "id": "cr:system:auth-delegator"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:basic-user",
          "id": "cr:system:basic-user"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:certificates.k8s.io:certificatesigningrequests:nodeclient",
          "id": "cr:system:certificates.k8s.io:certificatesigningrequests:nodeclient"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:certificates.k8s.io:certificatesigningrequests:selfnodeclient",
          "id": "cr:system:certificates.k8s.io:certificatesigningrequests:selfnodeclient"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:certificates.k8s.io:kube-apiserver-client-approver",
          "id": "cr:system:certificates.k8s.io:kube-apiserver-client-approver"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:certificates.k8s.io:kube-apiserver-client-kubelet-approver",
          "id": "cr:system:certificates.k8s.io:kube-apiserver-client-kubelet-approver"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:certificates.k8s.io:kubelet-serving-approver",
          "id": "cr:system:certificates.k8s.io:kubelet-serving-approver"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:certificates.k8s.io:legacy-unknown-approver",
          "id": "cr:system:certificates.k8s.io:legacy-unknown-approver"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:controller:attachdetach-controller",
          "id": "cr:system:controller:attachdetach-controller"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:controller:certificate-controller",
          "id": "cr:system:controller:certificate-controller"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:controller:clusterrole-aggregation-controller",
          "id": "cr:system:controller:clusterrole-aggregation-controller"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:controller:cronjob-controller",
          "id": "cr:system:controller:cronjob-controller"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:controller:daemon-set-controller",
          "id": "cr:system:controller:daemon-set-controller"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:controller:deployment-controller",
          "id": "cr:system:controller:deployment-controller"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:controller:disruption-controller",
          "id": "cr:system:controller:disruption-controller"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:controller:endpoint-controller",
          "id": "cr:system:controller:endpoint-controller"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:controller:endpointslice-controller",
          "id": "cr:system:controller:endpointslice-controller"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:controller:endpointslicemirroring-controller",
          "id": "cr:system:controller:endpointslicemirroring-controller"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:controller:expand-controller",
          "id": "cr:system:controller:expand-controller"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:controller:generic-garbage-collector",
          "id": "cr:system:controller:generic-garbage-collector"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:controller:horizontal-pod-autoscaler",
          "id": "cr:system:controller:horizontal-pod-autoscaler"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:controller:job-controller",
          "id": "cr:system:controller:job-controller"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:controller:namespace-controller",
          "id": "cr:system:controller:namespace-controller"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:controller:node-controller",
          "id": "cr:system:controller:node-controller"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:controller:persistent-volume-binder",
          "id": "cr:system:controller:persistent-volume-binder"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:controller:pod-garbage-collector",
          "id": "cr:system:controller:pod-garbage-collector"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:controller:pv-protection-controller",
          "id": "cr:system:controller:pv-protection-controller"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:controller:pvc-protection-controller",
          "id": "cr:system:controller:pvc-protection-controller"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:controller:replicaset-controller",
          "id": "cr:system:controller:replicaset-controller"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:controller:replication-controller",
          "id": "cr:system:controller:replication-controller"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:controller:resourcequota-controller",
          "id": "cr:system:controller:resourcequota-controller"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:controller:root-ca-cert-publisher",
          "id": "cr:system:controller:root-ca-cert-publisher"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:controller:route-controller",
          "id": "cr:system:controller:route-controller"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:controller:service-account-controller",
          "id": "cr:system:controller:service-account-controller"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:controller:service-controller",
          "id": "cr:system:controller:service-controller"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:controller:statefulset-controller",
          "id": "cr:system:controller:statefulset-controller"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:controller:ttl-controller",
          "id": "cr:system:controller:ttl-controller"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:coredns",
          "id": "cr:system:coredns"
        },
        "position": {
          "x": -363.7427448099944,
          "y": 133.82571432067036
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:discovery",
          "id": "cr:system:discovery"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:heapster",
          "id": "cr:system:heapster"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:kube-aggregator",
          "id": "cr:system:kube-aggregator"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:kube-controller-manager",
          "id": "cr:system:kube-controller-manager"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:kube-dns",
          "id": "cr:system:kube-dns"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:kube-scheduler",
          "id": "cr:system:kube-scheduler"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:kubelet-api-admin",
          "id": "cr:system:kubelet-api-admin"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:monitoring",
          "id": "cr:system:monitoring"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:node",
          "id": "cr:system:node"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:node-bootstrapper",
          "id": "cr:system:node-bootstrapper"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:node-problem-detector",
          "id": "cr:system:node-problem-detector"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:node-proxier",
          "id": "cr:system:node-proxier"
        },
        "position": {
          "x": -322.73501553512415,
          "y": 360.9577704847876
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:persistent-volume-provisioner",
          "id": "cr:system:persistent-volume-provisioner"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:public-info-viewer",
          "id": "cr:system:public-info-viewer"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:service-account-issuer-discovery",
          "id": "cr:system:service-account-issuer-discovery"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "system:volume-scheduler",
          "id": "cr:system:volume-scheduler"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "view",
          "id": "cr:view"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "clusterRole"
      },
      {
        "data": {
          "name": "pods/attach",
          "id": "rsc:pods/attach"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "pods/exec",
          "id": "rsc:pods/exec"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "pods/portforward",
          "id": "rsc:pods/portforward"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "pods/proxy",
          "id": "rsc:pods/proxy"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "secrets",
          "id": "rsc:secrets"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "services/proxy",
          "id": "rsc:services/proxy"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "serviceaccounts",
          "id": "rsc:serviceaccounts"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "pods",
          "id": "rsc:pods"
        },
        "position": {
          "x": -282.56057007938267,
          "y": 30.71852715617797
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "configmaps",
          "id": "rsc:configmaps"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "endpoints",
          "id": "rsc:endpoints"
        },
        "position": {
          "x": -238.4227680323791,
          "y": 239.03180083052825
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "persistentvolumeclaims",
          "id": "rsc:persistentvolumeclaims"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "replicationcontrollers",
          "id": "rsc:replicationcontrollers"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "replicationcontrollers/scale",
          "id": "rsc:replicationcontrollers/scale"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "services",
          "id": "rsc:services"
        },
        "position": {
          "x": -333.0341782411046,
          "y": 246.94035145805918
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "daemonsets",
          "id": "rsc:daemonsets"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "deployments",
          "id": "rsc:deployments"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "deployments/rollback",
          "id": "rsc:deployments/rollback"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "deployments/scale",
          "id": "rsc:deployments/scale"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "replicasets",
          "id": "rsc:replicasets"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "replicasets/scale",
          "id": "rsc:replicasets/scale"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "statefulsets",
          "id": "rsc:statefulsets"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "statefulsets/scale",
          "id": "rsc:statefulsets/scale"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "horizontalpodautoscalers",
          "id": "rsc:horizontalpodautoscalers"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "cronjobs",
          "id": "rsc:cronjobs"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "jobs",
          "id": "rsc:jobs"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "ingresses",
          "id": "rsc:ingresses"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "networkpolicies",
          "id": "rsc:networkpolicies"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "poddisruptionbudgets",
          "id": "rsc:poddisruptionbudgets"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "persistentvolumeclaims/status",
          "id": "rsc:persistentvolumeclaims/status"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "services/status",
          "id": "rsc:services/status"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "bindings",
          "id": "rsc:bindings"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "events",
          "id": "rsc:events"
        },
        "position": {
          "x": -177.82849627751528,
          "y": 364.9064773074563
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "limitranges",
          "id": "rsc:limitranges"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "namespaces/status",
          "id": "rsc:namespaces/status"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "pods/log",
          "id": "rsc:pods/log"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "pods/status",
          "id": "rsc:pods/status"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "replicationcontrollers/status",
          "id": "rsc:replicationcontrollers/status"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "resourcequotas",
          "id": "rsc:resourcequotas"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "resourcequotas/status",
          "id": "rsc:resourcequotas/status"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "namespaces",
          "id": "rsc:namespaces"
        },
        "position": {
          "x": -394.8978303855184,
          "y": -2.0048793138854535
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "controllerrevisions",
          "id": "rsc:controllerrevisions"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "daemonsets/status",
          "id": "rsc:daemonsets/status"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "deployments/status",
          "id": "rsc:deployments/status"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "replicasets/status",
          "id": "rsc:replicasets/status"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "statefulsets/status",
          "id": "rsc:statefulsets/status"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "horizontalpodautoscalers/status",
          "id": "rsc:horizontalpodautoscalers/status"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "cronjobs/status",
          "id": "rsc:cronjobs/status"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "jobs/status",
          "id": "rsc:jobs/status"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "ingresses/status",
          "id": "rsc:ingresses/status"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "poddisruptionbudgets/status",
          "id": "rsc:poddisruptionbudgets/status"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "localsubjectaccessreviews",
          "id": "rsc:localsubjectaccessreviews"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "rolebindings",
          "id": "rsc:rolebindings"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "roles",
          "id": "rsc:roles"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "*",
          "id": "rsc:*"
        },
        "position": {
          "x": -505.26770282299435,
          "y": -254.12940923242417
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "nodes",
          "id": "rsc:nodes"
        },
        "position": {
          "x": -420.38651429861557,
          "y": 258.00899238966457
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "tokenreviews",
          "id": "rsc:tokenreviews"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "subjectaccessreviews",
          "id": "rsc:subjectaccessreviews"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "selfsubjectaccessreviews",
          "id": "rsc:selfsubjectaccessreviews"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "selfsubjectrulesreviews",
          "id": "rsc:selfsubjectrulesreviews"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "certificatesigningrequests/nodeclient",
          "id": "rsc:certificatesigningrequests/nodeclient"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "certificatesigningrequests/selfnodeclient",
          "id": "rsc:certificatesigningrequests/selfnodeclient"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "signers",
          "id": "rsc:signers"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "persistentvolumes",
          "id": "rsc:persistentvolumes"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "nodes/status",
          "id": "rsc:nodes/status"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "volumeattachments",
          "id": "rsc:volumeattachments"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "csidrivers",
          "id": "rsc:csidrivers"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "csinodes",
          "id": "rsc:csinodes"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "certificatesigningrequests",
          "id": "rsc:certificatesigningrequests"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "certificatesigningrequests/approval",
          "id": "rsc:certificatesigningrequests/approval"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "certificatesigningrequests/status",
          "id": "rsc:certificatesigningrequests/status"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "clusterroles",
          "id": "rsc:clusterroles"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "cronjobs/finalizers",
          "id": "rsc:cronjobs/finalizers"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "daemonsets/finalizers",
          "id": "rsc:daemonsets/finalizers"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "pods/binding",
          "id": "rsc:pods/binding"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "deployments/finalizers",
          "id": "rsc:deployments/finalizers"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "*/scale",
          "id": "rsc:*/scale"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "endpoints/restricted",
          "id": "rsc:endpoints/restricted"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "services/finalizers",
          "id": "rsc:services/finalizers"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "endpointslices",
          "id": "rsc:endpointslices"
        },
        "position": {
          "x": -324.33123668935673,
          "y": 484.12940923242417
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "endpoints/finalizers",
          "id": "rsc:endpoints/finalizers"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "storageclasses",
          "id": "rsc:storageclasses"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "jobs/finalizers",
          "id": "rsc:jobs/finalizers"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "namespaces/finalize",
          "id": "rsc:namespaces/finalize"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "persistentvolumes/status",
          "id": "rsc:persistentvolumes/status"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "replicasets/finalizers",
          "id": "rsc:replicasets/finalizers"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "replicationcontrollers/finalizers",
          "id": "rsc:replicationcontrollers/finalizers"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "statefulsets/finalizers",
          "id": "rsc:statefulsets/finalizers"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "leases",
          "id": "rsc:leases"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "serviceaccounts/token",
          "id": "rsc:serviceaccounts/token"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "nodes/log",
          "id": "rsc:nodes/log"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "nodes/metrics",
          "id": "rsc:nodes/metrics"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "nodes/proxy",
          "id": "rsc:nodes/proxy"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "nodes/spec",
          "id": "rsc:nodes/spec"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "nodes/stats",
          "id": "rsc:nodes/stats"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "pods/eviction",
          "id": "rsc:pods/eviction"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "name": "runtimeclasses",
          "id": "rsc:runtimeclasses"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "resource"
      },
      {
        "data": {
          "id": "ns-cyberarmor-system",
          "name": "ns:cyberarmor-system",
          "kind": "namespace"
        },
        "position": {
          "x": 58.45174405579692,
          "y": -92.94494186293936
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": ""
      },
      {
        "data": {
          "id": "ns-kube-system",
          "name": "ns:kube-system",
          "kind": "namespace"
        },
        "position": {
          "x": -632.9705302848823,
          "y": 144.9425092056
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": ""
      },
      {
        "data": {
          "id": "s:ca-controller-service-account",
          "name": "ca-controller-service-account",
          "parent": "ns-cyberarmor-system"
        },
        "position": {
          "x": 25.135549393816405,
          "y": -105.5423837032942
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "ServiceAccount"
      },
      {
        "data": {
          "id": "s:system:masters",
          "name": "system:masters"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "Group"
      },
      {
        "data": {
          "id": "s:system:bootstrappers:kubeadm:default-node-token",
          "name": "system:bootstrappers:kubeadm:default-node-token"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "Group"
      },
      {
        "data": {
          "id": "s:system:nodes",
          "name": "system:nodes"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "Group"
      },
      {
        "data": {
          "id": "s:kube-proxy",
          "name": "kube-proxy",
          "parent": "ns-kube-system"
        },
        "position": {
          "x": -694.6423437920841,
          "y": 373.01442764362423
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "ServiceAccount"
      },
      {
        "data": {
          "id": "s:default",
          "name": "default",
          "parent": "ns-kube-system"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "ServiceAccount"
      },
      {
        "data": {
          "id": "s:storage-provisioner",
          "name": "storage-provisioner",
          "parent": "ns-kube-system"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "ServiceAccount"
      },
      {
        "data": {
          "id": "s:system:authenticated",
          "name": "system:authenticated"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "Group"
      },
      {
        "data": {
          "id": "s:attachdetach-controller",
          "name": "attachdetach-controller",
          "parent": "ns-kube-system"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "ServiceAccount"
      },
      {
        "data": {
          "id": "s:certificate-controller",
          "name": "certificate-controller",
          "parent": "ns-kube-system"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "ServiceAccount"
      },
      {
        "data": {
          "id": "s:clusterrole-aggregation-controller",
          "name": "clusterrole-aggregation-controller",
          "parent": "ns-kube-system"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "ServiceAccount"
      },
      {
        "data": {
          "id": "s:cronjob-controller",
          "name": "cronjob-controller",
          "parent": "ns-kube-system"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "ServiceAccount"
      },
      {
        "data": {
          "id": "s:daemon-set-controller",
          "name": "daemon-set-controller",
          "parent": "ns-kube-system"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "ServiceAccount"
      },
      {
        "data": {
          "id": "s:deployment-controller",
          "name": "deployment-controller",
          "parent": "ns-kube-system"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "ServiceAccount"
      },
      {
        "data": {
          "id": "s:disruption-controller",
          "name": "disruption-controller",
          "parent": "ns-kube-system"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "ServiceAccount"
      },
      {
        "data": {
          "id": "s:endpoint-controller",
          "name": "endpoint-controller",
          "parent": "ns-kube-system"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "ServiceAccount"
      },
      {
        "data": {
          "id": "s:endpointslice-controller",
          "name": "endpointslice-controller",
          "parent": "ns-kube-system"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "ServiceAccount"
      },
      {
        "data": {
          "id": "s:endpointslicemirroring-controller",
          "name": "endpointslicemirroring-controller",
          "parent": "ns-kube-system"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "ServiceAccount"
      },
      {
        "data": {
          "id": "s:expand-controller",
          "name": "expand-controller",
          "parent": "ns-kube-system"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "ServiceAccount"
      },
      {
        "data": {
          "id": "s:generic-garbage-collector",
          "name": "generic-garbage-collector",
          "parent": "ns-kube-system"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "ServiceAccount"
      },
      {
        "data": {
          "id": "s:horizontal-pod-autoscaler",
          "name": "horizontal-pod-autoscaler",
          "parent": "ns-kube-system"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "ServiceAccount"
      },
      {
        "data": {
          "id": "s:job-controller",
          "name": "job-controller",
          "parent": "ns-kube-system"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "ServiceAccount"
      },
      {
        "data": {
          "id": "s:namespace-controller",
          "name": "namespace-controller",
          "parent": "ns-kube-system"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "ServiceAccount"
      },
      {
        "data": {
          "id": "s:node-controller",
          "name": "node-controller",
          "parent": "ns-kube-system"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "ServiceAccount"
      },
      {
        "data": {
          "id": "s:persistent-volume-binder",
          "name": "persistent-volume-binder",
          "parent": "ns-kube-system"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "ServiceAccount"
      },
      {
        "data": {
          "id": "s:pod-garbage-collector",
          "name": "pod-garbage-collector",
          "parent": "ns-kube-system"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "ServiceAccount"
      },
      {
        "data": {
          "id": "s:pv-protection-controller",
          "name": "pv-protection-controller",
          "parent": "ns-kube-system"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "ServiceAccount"
      },
      {
        "data": {
          "id": "s:pvc-protection-controller",
          "name": "pvc-protection-controller",
          "parent": "ns-kube-system"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "ServiceAccount"
      },
      {
        "data": {
          "id": "s:replicaset-controller",
          "name": "replicaset-controller",
          "parent": "ns-kube-system"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "ServiceAccount"
      },
      {
        "data": {
          "id": "s:replication-controller",
          "name": "replication-controller",
          "parent": "ns-kube-system"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "ServiceAccount"
      },
      {
        "data": {
          "id": "s:resourcequota-controller",
          "name": "resourcequota-controller",
          "parent": "ns-kube-system"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "ServiceAccount"
      },
      {
        "data": {
          "id": "s:root-ca-cert-publisher",
          "name": "root-ca-cert-publisher",
          "parent": "ns-kube-system"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "ServiceAccount"
      },
      {
        "data": {
          "id": "s:route-controller",
          "name": "route-controller",
          "parent": "ns-kube-system"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "ServiceAccount"
      },
      {
        "data": {
          "id": "s:service-account-controller",
          "name": "service-account-controller",
          "parent": "ns-kube-system"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "ServiceAccount"
      },
      {
        "data": {
          "id": "s:service-controller",
          "name": "service-controller",
          "parent": "ns-kube-system"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "ServiceAccount"
      },
      {
        "data": {
          "id": "s:statefulset-controller",
          "name": "statefulset-controller",
          "parent": "ns-kube-system"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "ServiceAccount"
      },
      {
        "data": {
          "id": "s:ttl-controller",
          "name": "ttl-controller",
          "parent": "ns-kube-system"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "ServiceAccount"
      },
      {
        "data": {
          "id": "s:coredns",
          "name": "coredns",
          "parent": "ns-kube-system"
        },
        "position": {
          "x": -678.9227078459953,
          "y": 20.846235178389577
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "ServiceAccount"
      },
      {
        "data": {
          "id": "s:system:kube-controller-manager",
          "name": "system:kube-controller-manager"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "User"
      },
      {
        "data": {
          "id": "s:kube-dns",
          "name": "kube-dns",
          "parent": "ns-kube-system"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "ServiceAccount"
      },
      {
        "data": {
          "id": "s:system:kube-scheduler",
          "name": "system:kube-scheduler"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "User"
      },
      {
        "data": {
          "id": "s:system:monitoring",
          "name": "system:monitoring"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "Group"
      },
      {
        "data": {
          "id": "s:system:kube-proxy",
          "name": "system:kube-proxy"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "User"
      },
      {
        "data": {
          "id": "s:system:unauthenticated",
          "name": "system:unauthenticated"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "Group"
      },
      {
        "data": {
          "id": "s:system:serviceaccounts",
          "name": "system:serviceaccounts"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "Group"
      },
      {
        "data": {
          "id": "ns-kube-public",
          "name": "ns:kube-public",
          "kind": "namespace"
        },
        "position": {
          "x": 0,
          "y": 8.5
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": ""
      },
      {
        "data": {
          "name": "kubeadm:bootstrap-signer-clusterinfo",
          "id": "r:kubeadm:bootstrap-signer-clusterinfo",
          "namespace": "ns-kube-public",
          "parent": "ns-kube-public"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "role"
      },
      {
        "data": {
          "name": "system:controller:bootstrap-signer",
          "id": "r:system:controller:bootstrap-signer",
          "namespace": "ns-kube-public",
          "parent": "ns-kube-public"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "role"
      },
      {
        "data": {
          "name": "extension-apiserver-authentication-reader",
          "id": "r:extension-apiserver-authentication-reader",
          "namespace": "ns-kube-system",
          "parent": "ns-kube-system"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "role"
      },
      {
        "data": {
          "name": "kube-proxy",
          "id": "r:kube-proxy",
          "namespace": "ns-kube-system",
          "parent": "ns-kube-system"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "role"
      },
      {
        "data": {
          "name": "kubeadm:kubelet-config-1.20",
          "id": "r:kubeadm:kubelet-config-1.20",
          "namespace": "ns-kube-system",
          "parent": "ns-kube-system"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "role"
      },
      {
        "data": {
          "name": "kubeadm:nodes-kubeadm-config",
          "id": "r:kubeadm:nodes-kubeadm-config",
          "namespace": "ns-kube-system",
          "parent": "ns-kube-system"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "role"
      },
      {
        "data": {
          "name": "system::leader-locking-kube-controller-manager",
          "id": "r:system::leader-locking-kube-controller-manager",
          "namespace": "ns-kube-system",
          "parent": "ns-kube-system"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "role"
      },
      {
        "data": {
          "name": "system::leader-locking-kube-scheduler",
          "id": "r:system::leader-locking-kube-scheduler",
          "namespace": "ns-kube-system",
          "parent": "ns-kube-system"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "role"
      },
      {
        "data": {
          "name": "system:controller:cloud-provider",
          "id": "r:system:controller:cloud-provider",
          "namespace": "ns-kube-system",
          "parent": "ns-kube-system"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "role"
      },
      {
        "data": {
          "name": "system:controller:token-cleaner",
          "id": "r:system:controller:token-cleaner",
          "namespace": "ns-kube-system",
          "parent": "ns-kube-system"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "role"
      },
      {
        "data": {
          "name": "system:persistent-volume-provisioner",
          "id": "r:system:persistent-volume-provisioner",
          "namespace": "ns-kube-system",
          "parent": "ns-kube-system"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "role"
      },
      {
        "data": {
          "id": "s:system:anonymous",
          "name": "system:anonymous"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "User"
      },
      {
        "data": {
          "id": "s:bootstrap-signer",
          "name": "bootstrap-signer",
          "parent": "ns-kube-system"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "ServiceAccount"
      },
      {
        "data": {
          "id": "s:kube-controller-manager",
          "name": "kube-controller-manager",
          "parent": "ns-kube-system"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "ServiceAccount"
      },
      {
        "data": {
          "id": "s:kube-scheduler",
          "name": "kube-scheduler",
          "parent": "ns-kube-system"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "ServiceAccount"
      },
      {
        "data": {
          "id": "s:cloud-provider",
          "name": "cloud-provider",
          "parent": "ns-kube-system"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "ServiceAccount"
      },
      {
        "data": {
          "id": "s:token-cleaner",
          "name": "token-cleaner",
          "parent": "ns-kube-system"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": "ServiceAccount"
      },
      {
        "data": {
          "id": "ns-default",
          "name": "ns:default",
          "kind": "namespace"
        },
        "position": {
          "x": 0,
          "y": 8.5
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": ""
      },
      {
        "data": {
          "id": "ca-audit",
          "name": "ca-audit",
          "img": "assets/images/kubernetesNormal.svg",
          "parent": "ns-default",
          "kind": "microservice",
          "isCAAttached": false,
          "caIntegrityStatus": false,
          "coverstyle": "cover",
          "isExternalFacingMS": false,
          "isPrivileged": false,
          "zindex": 100
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": ""
      },
      {
        "data": {
          "id": "wlid://cluster-haganenorenkinjitsu/namespace-cyberarmor-system/deployment-ca-posture",
          "name": "ca-posture",
          "img": "assets/images/kubernetesNormal.svg",
          "parent": "ns-cyberarmor-system",
          "kind": "microservice",
          "isCAAttached": false,
          "caIntegrityStatus": 0,
          "coverstyle": "cover",
          "isExternalFacingMS": false,
          "isPrivileged": false,
          "zindex": 100
        },
        "position": {
          "x": 13.42060661990456,
          "y": 26.227991068713806
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": ""
      },
      {
        "data": {
          "id": "wlid://cluster-haganenorenkinjitsu/namespace-cyberarmor-system/deployment-ca-ocimage",
          "name": "ca-ocimage",
          "img": "assets/images/kubernetesNormal.svg",
          "parent": "ns-cyberarmor-system",
          "kind": "microservice",
          "isCAAttached": false,
          "caIntegrityStatus": 0,
          "coverstyle": "cover",
          "isExternalFacingMS": false,
          "isPrivileged": false,
          "zindex": 100
        },
        "position": {
          "x": 186.63824937421157,
          "y": -5.219662689999211
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": ""
      },
      {
        "data": {
          "id": "wlid://cluster-haganenorenkinjitsu/namespace-cyberarmor-system/deployment-ca-rbac",
          "name": "ca-rbac",
          "img": "assets/images/kubernetesNormal.svg",
          "parent": "ns-cyberarmor-system",
          "kind": "microservice",
          "isCAAttached": false,
          "caIntegrityStatus": 0,
          "coverstyle": "cover",
          "isExternalFacingMS": false,
          "isPrivileged": false,
          "zindex": 100
        },
        "position": {
          "x": 103.23997406690745,
          "y": -12.587927507799066
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": ""
      },
      {
        "data": {
          "id": "wlid://cluster-haganenorenkinjitsu/namespace-cyberarmor-system/deployment-ca-dashboard-aggregator",
          "name": "ca-dashboard-aggregator",
          "img": "assets/images/kubernetesNormal.svg",
          "parent": "ns-cyberarmor-system",
          "kind": "microservice",
          "isCAAttached": false,
          "caIntegrityStatus": 0,
          "coverstyle": "cover",
          "isExternalFacingMS": false,
          "isPrivileged": false,
          "zindex": 100
        },
        "position": {
          "x": 199.12676164545826,
          "y": -117.59434984155473
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": ""
      },
      {
        "data": {
          "id": "wlid://cluster-haganenorenkinjitsu/namespace-cyberarmor-system/deployment-ca-vuln-scan",
          "name": "ca-vuln-scan",
          "img": "assets/images/kubernetesNormal.svg",
          "parent": "ns-cyberarmor-system",
          "kind": "microservice",
          "isCAAttached": false,
          "caIntegrityStatus": 0,
          "coverstyle": "cover",
          "isExternalFacingMS": false,
          "isPrivileged": false,
          "zindex": 100
        },
        "position": {
          "x": -100.22327353386441,
          "y": -0.5767572061272119
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": ""
      },
      {
        "data": {
          "id": "wlid://cluster-haganenorenkinjitsu/namespace-cyberarmor-system/deployment-ca-websocket",
          "name": "ca-websocket",
          "img": "assets/images/kubernetesNormal.svg",
          "parent": "ns-cyberarmor-system",
          "kind": "microservice",
          "isCAAttached": false,
          "caIntegrityStatus": 0,
          "coverstyle": "cover",
          "isExternalFacingMS": false,
          "isPrivileged": false,
          "zindex": 100
        },
        "position": {
          "x": 128.79202326859024,
          "y": -218.14296702590383
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": ""
      },
      {
        "data": {
          "id": "wlid://cluster-haganenorenkinjitsu/namespace-cyberarmor-system/deployment-ca-oracle",
          "name": "ca-oracle",
          "img": "assets/images/kubernetesNormal.svg",
          "parent": "ns-cyberarmor-system",
          "kind": "microservice",
          "isCAAttached": false,
          "caIntegrityStatus": 0,
          "coverstyle": "cover",
          "isExternalFacingMS": false,
          "isPrivileged": false,
          "zindex": 100
        },
        "position": {
          "x": 5.598055290404432,
          "y": -229.11787479459252
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": ""
      },
      {
        "data": {
          "id": "wlid://cluster-haganenorenkinjitsu/namespace-kube-system/deployment-coredns",
          "name": "coredns",
          "img": "assets/images/kubernetesNormal.svg",
          "parent": "ns-kube-system",
          "kind": "microservice",
          "isCAAttached": false,
          "caIntegrityStatus": 0,
          "coverstyle": "cover",
          "isExternalFacingMS": false,
          "isPrivileged": false,
          "zindex": 100
        },
        "position": {
          "x": -674.0068131971523,
          "y": -100.12940923242422
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": ""
      },
      {
        "data": {
          "id": "wlid://cluster-haganenorenkinjitsu/namespace-kube-system/daemonset-kube-proxy",
          "name": "kube-proxy",
          "img": "assets/images/kubernetesNormal.svg",
          "parent": "ns-kube-system",
          "kind": "microservice",
          "isCAAttached": false,
          "caIntegrityStatus": 0,
          "coverstyle": "cover",
          "isExternalFacingMS": false,
          "isPrivileged": true,
          "zindex": 100
        },
        "position": {
          "x": -567.2987167776805,
          "y": 369.8922152475333
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": false,
        "classes": ""
      }
    ],
    "edges": [
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:pods/attach",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "c90a10ca-b466-4ad6-96dd-aeed5ac7c1e8"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:pods/exec",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "ed4de43d-2163-465f-a6d1-5e7674ca18e8"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:pods/portforward",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "ac195f40-aaaa-413b-86ee-21cedb35ab65"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:pods/proxy",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "ad5538d5-b616-4dc0-9433-add22461c6b5"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:secrets",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "54dc7b91-d1b1-45d4-8f9d-50df243ba937"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:services/proxy",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "4c61af57-7a16-4b65-be71-440a7508de67"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:serviceaccounts",
          "name": "impersonate",
          "color": "#4b1991",
          "id": "71d8a829-bde3-4c82-8a96-29910781ebc8"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:pods",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "e77e3c9a-d851-488d-b7e2-0054c1ff5c61"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:pods/attach",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "fa1edc3c-8a06-424c-b863-343c6826685b"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:pods/exec",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "df53d050-15e4-4400-934e-d3018b78b429"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:pods/portforward",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "3d0dca2a-bb5d-49de-b4c6-d67b23801343"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:pods/proxy",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "92c6eca1-0b4b-4714-bb99-e186b9ce3342"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:configmaps",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "5f95ecce-338c-4a83-8d21-5c050d8c122f"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:endpoints",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "ef0f1e57-ea12-4ba4-aa3f-f541bd7cc822"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:persistentvolumeclaims",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "9ab28482-49ad-4b6a-a3e3-f7e02270e80b"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:replicationcontrollers",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "74ed2c4e-e7bf-4023-bb0e-608eda23318d"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:replicationcontrollers/scale",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "09d2c5bd-cff7-495e-9a99-423f6d13ac25"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:secrets",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "ce94b49f-99e9-45fd-a1bf-17a168ea9cdb"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:serviceaccounts",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "6ce661c1-4384-4d8f-9926-c64e499ece9a"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:services",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "4cb3745b-8e03-4f7b-9351-067a8099fd27"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:services/proxy",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "bafcf22c-6362-4d93-adf1-56e8a0bba209"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:daemonsets",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "db8e83ae-e966-4ee2-b128-06a26a004428"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:deployments",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "48eb44cd-6ad1-40a9-b8e9-740ecac743a0"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:deployments/rollback",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "5ef7eda7-3c80-4471-adf0-ebda256a19ec"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:deployments/scale",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "edccd61d-7e7b-4278-964e-300acc93e22c"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:replicasets",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "92cd1485-dafa-4d30-8fa1-82bac7a068bc"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:replicasets/scale",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "ba237e36-b11b-4164-89ac-e8ddf673c7b2"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:statefulsets",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "413ab905-3841-40df-ad19-08a5cb924343"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:statefulsets/scale",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "f00ff57e-bf83-4e50-8380-da0aaa752bce"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:horizontalpodautoscalers",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "ea9bc57c-36ce-48ef-bdb0-22e0c6ae847c"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:cronjobs",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "5baaf781-c187-4c9a-bedb-cad9d2ffd4bb"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:jobs",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "1ccf3dda-cf5b-468b-ab3f-d00d85b92a24"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:daemonsets",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "ff550681-e9fd-4abb-9e70-f79aa6a4e95a"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:deployments",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "8d1cea7a-8e2f-4281-8d16-b5b4804ba697"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:deployments/rollback",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "9e22b900-61a9-45ec-830a-7319f429ed69"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:deployments/scale",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "c020ba41-7bbe-4f69-a2d5-3a0e42c11244"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:ingresses",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "2b996a69-ad00-49aa-b3ab-e6b367105944"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:networkpolicies",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "00d5e0cd-3267-49c7-9c5f-53d51f0d04fb"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:replicasets",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "48cddc4a-5ac5-4cd5-99ee-9e6a8adf2408"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:replicasets/scale",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "4e7c46a8-c423-4a4a-8807-632b53330e7f"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:replicationcontrollers/scale",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "34548cf9-287d-4c98-afb5-2972a0adb89c"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:poddisruptionbudgets",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "eea6ffaf-3936-4747-8f77-9a6744de1a9f"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:ingresses",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "e6315ebb-3cbb-4863-9f0d-92ba101c9373"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:networkpolicies",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "b8d2930c-3b09-4d7c-a66e-588ea3bb08ad"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:configmaps",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "44124ab0-ce40-42fb-84ae-c9a6c70de1dd"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:endpoints",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "3949fe45-7d6d-4291-af3d-55c03435ae4e"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:persistentvolumeclaims",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "e65e086c-4dab-429b-95b9-761199eaef77"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:persistentvolumeclaims/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "13943aa2-2981-4d54-aea0-27c8c39eb454"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:pods",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "c384b325-163e-4e93-be0a-4f551770fae1"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:replicationcontrollers",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "10e422d6-885e-400f-ac42-18c2278a486f"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:replicationcontrollers/scale",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "e930ab8b-9b29-4382-838f-57839e933e27"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:serviceaccounts",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "ee91be3a-fcf0-43b4-876b-eb1736887441"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:services",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "1e89f9aa-796d-483d-810d-e2ad8f4f02c0"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:services/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "d86a7198-6daf-40e1-9798-44d7f7161aa3"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:bindings",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "26e4b611-4dea-4dfe-a57c-2003080dcc1e"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:events",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "4e761b9e-b0e2-4c7b-93a9-4c056472a91d"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:limitranges",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "578643a0-4307-4b62-9bf2-b279794619d2"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:namespaces/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "59509289-4da7-422f-9b73-2b0ad298c2e7"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:pods/log",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "eaa2710a-0218-4b4b-92ea-a3f922071f0b"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:pods/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "3b183a75-a0f2-4ff3-a576-3adb5996d9b3"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:replicationcontrollers/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "4a4acd2e-2468-49bd-9b81-d5b30db5b140"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:resourcequotas",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "4e4610b4-dce3-4413-9184-9716fb36e1bd"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:resourcequotas/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "7a2acc2b-db4b-41d0-8895-3653f6a90547"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:namespaces",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "d4f77783-d408-4145-9986-1fe745f2edee"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:controllerrevisions",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "8e959222-7113-4b26-915f-d7eedd51f3b6"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:daemonsets",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "1b39506f-1e04-4ac0-98f1-b6073f36d4ab"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:daemonsets/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "df195fb4-dab0-4458-b04a-860fdabf21ae"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:deployments",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "51d70c06-d2b1-4679-a299-7aff4b15a865"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:deployments/scale",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "a0da32e7-227f-45c0-b7f3-b0760fc1abc5"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:deployments/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "d105b0ce-8ea1-4664-9884-225418af09ea"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:replicasets",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "054fa840-b195-430c-a816-7d4b9bdc050a"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:replicasets/scale",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "dbcc8e2b-2ad3-400a-9b5d-c4e68fe1a26c"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:replicasets/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "65672c71-0418-467c-9844-4e58c902d038"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:statefulsets",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "31c6044a-6259-4d94-a311-ce34ce34b344"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:statefulsets/scale",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "e4fba98d-4cbb-44b3-a5b3-163673592983"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:statefulsets/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "a7e6cc29-c492-4e3b-8b8f-53867c5ac12b"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:horizontalpodautoscalers",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "765ad716-f26d-4c29-a03f-c131f1a11f87"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:horizontalpodautoscalers/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "6872a45c-ac44-4904-9df5-137e47077d28"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:cronjobs",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "d20a5fdd-2794-4d11-a14e-dcc7a27a33dd"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:cronjobs/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "7267a947-846c-4c1f-b2f1-34154e1f347c"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:jobs",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "5293f09a-e46e-498f-95e5-81b912516dbe"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:jobs/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "bfcd1525-c87d-42c7-be55-91451aa1152f"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:daemonsets",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "7708dbdb-2d96-4f02-abb8-ff9dfd1c1a4f"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:daemonsets/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "ab902e43-d066-4d8b-9c1b-50b343fafb8f"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:deployments",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "7bbf053e-0a1a-4d90-8b78-77771543d0e8"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:deployments/scale",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "0fdd61e9-7465-4653-8dc3-016b786089d5"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:deployments/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "e37198e3-c0d7-4164-b3a2-70006f2eb69a"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:ingresses",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "a8fa1f46-828f-49c1-827d-4d1f2d45230d"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:ingresses/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "9e5e29d1-922e-4322-befd-f5364bb73ca2"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:networkpolicies",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "c6e8d43b-4997-4d6d-8180-011217c36715"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:replicasets",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "48997a8e-6ea7-466d-80d2-f4f3ec180f65"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:replicasets/scale",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "39711248-04f4-4f3c-88dc-14bd4a453710"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:replicasets/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "443e6463-cbe5-4d9e-b1cc-8841a7c01f2a"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:replicationcontrollers/scale",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "8a982500-b50f-4613-98eb-82bada030d36"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:poddisruptionbudgets",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "3a9caf43-779b-47b9-a3a7-d672b6e26317"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:poddisruptionbudgets/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "4a1b42c5-c8cb-4ae5-8b08-d31525fab9f6"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:ingresses",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "117661fc-4640-4e96-a4bd-348dc76a66da"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:ingresses/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "3aac0281-9a66-4450-bad7-a457fc6d1218"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:networkpolicies",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "a2504a43-5f85-4d9b-8bde-2090d6b315b7"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:localsubjectaccessreviews",
          "name": "create",
          "color": "#4b1991",
          "id": "c5acd671-2209-414c-a118-94f4bbcb42c6"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:rolebindings",
          "name": "create,delete,deletecollection,get,list,patch,update,watch",
          "color": "#4b1991",
          "id": "2de6e15d-5fd0-4cf7-8caa-51dbb1cd7331"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:admin",
          "target": "rsc:roles",
          "name": "create,delete,deletecollection,get,list,patch,update,watch",
          "color": "#4b1991",
          "id": "f7f2f291-6071-4d22-a0ec-117ee2a49344"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:ca-controller-roles",
          "target": "rsc:*",
          "name": "*",
          "color": "#4b1991",
          "id": "7807c4b3-4a21-414c-8377-357475b27cc0"
        },
        "position": {
          "x": null,
          "y": null
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:cluster-admin",
          "target": "rsc:*",
          "name": "*",
          "color": "#4b1991",
          "id": "63e4743a-29c5-4dc2-9421-368b03630379"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:pods/attach",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "dabb2d49-69a0-4696-b25f-e730fb2be8a1"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:pods/exec",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "d7bd2e44-8760-4eac-95a5-163b271ab960"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:pods/portforward",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "fba47ea9-ab41-4c70-9120-7066314f4294"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:pods/proxy",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "0331c482-0c4c-4f4d-817d-7048c3121722"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:secrets",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "5346f030-b950-4796-a95b-f57506501cd0"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:services/proxy",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "f73fd21e-5042-4a85-b1b5-4b3d9cc10f4f"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:serviceaccounts",
          "name": "impersonate",
          "color": "#4b1991",
          "id": "309bdc0f-e990-4f3a-8f33-978468fbd34a"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:pods",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "ee0c2fea-f59e-44e0-97b1-0c2a778771c1"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:pods/attach",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "344171f3-7082-438c-99cf-5f79adab080b"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:pods/exec",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "b7c8cf6f-0cea-4bf3-b621-cbf75e8297cf"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:pods/portforward",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "ba92f169-4490-4f48-8e91-afe0e25d83e1"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:pods/proxy",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "f5b2844f-f6ce-425f-9e2c-81885fb1890e"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:configmaps",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "d5f6a452-9f0a-40cc-8e92-b0ebe8ded333"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:endpoints",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "32d09e8f-1bbd-4c94-96cb-1805cf80f71e"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:persistentvolumeclaims",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "e352272a-71b9-4f19-9769-1a242b683ae5"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:replicationcontrollers",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "fc6cef34-f76d-4fac-bc17-5b72915b2068"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:replicationcontrollers/scale",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "4db7ebec-4eec-40f2-b77b-791809f78b98"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:secrets",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "2c3018e5-939d-492a-9729-04b2b9262137"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:serviceaccounts",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "87b3c121-88df-47ce-8a98-6bbe302c859b"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:services",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "f015e540-48b5-494c-bb5d-8ad32af472fe"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:services/proxy",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "ba45f088-ae50-4aad-8d01-07a370635e7f"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:daemonsets",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "ca48e705-c304-4485-986e-2bbc34b1c2dd"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:deployments",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "9480d235-1e87-4f02-b21d-ed1bf75491ee"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:deployments/rollback",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "d45f5d81-60f0-4266-b989-2c05ce10c849"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:deployments/scale",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "e00e893f-53bf-4846-b805-d096d1a47a0b"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:replicasets",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "f1558e19-c880-4c57-b606-9b1e773e64d2"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:replicasets/scale",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "91000a11-57e4-46c9-9e31-008f5e62e703"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:statefulsets",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "402cd1b7-4e90-4132-856e-cb84de3d0d30"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:statefulsets/scale",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "ecdce99d-c8b7-4f2e-8b8a-2f4b8acfd29c"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:horizontalpodautoscalers",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "ebe983ba-a677-4bdf-8096-7c1c33e1d297"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:cronjobs",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "5e775166-4648-4275-98d2-b104b952a97d"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:jobs",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "08c7f01f-4f1c-4310-af50-4258412ac1cc"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:daemonsets",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "25bb67cc-9c5d-433f-9737-cb3f09bd95f5"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:deployments",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "64ef070f-a7cf-4c76-96ea-6aa629ebce0d"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:deployments/rollback",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "1caa1a9e-8d48-4637-989b-55736a89f3cf"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:deployments/scale",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "3b54a082-fbde-468e-bd06-4e2535da8079"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:ingresses",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "666b0844-4554-4336-a62d-d5d887a17bff"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:networkpolicies",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "b891d710-82c6-46aa-8aa4-bcedafd4c620"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:replicasets",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "28f135ce-5987-4864-a892-f802027e6ea3"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:replicasets/scale",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "7866f51c-e49a-40a1-a946-4f63133f7680"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:replicationcontrollers/scale",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "6726695a-f357-4d77-85ea-125fe7bfb1a5"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:poddisruptionbudgets",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "54b47bbc-8da5-48e2-b9cb-426f60e2f59c"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:ingresses",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "f2ae42f3-bb20-4c1b-bb71-525e65a9bb93"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:networkpolicies",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "eaf3c7f3-2966-4f1c-bc87-2acc37cc4542"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:configmaps",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "8b2ee8cb-41b0-4af0-9319-56b2a6dccbb2"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:endpoints",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "3b9f114f-ae10-452d-8397-5c908341cb05"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:persistentvolumeclaims",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "013a2375-797c-4b39-83af-3e3a9cb136b4"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:persistentvolumeclaims/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "7c628ca0-0587-414f-acf8-0ce7ee43a282"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:pods",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "2da2a297-92df-443a-b7e7-7eea0763ba92"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:replicationcontrollers",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "ffe7f4aa-a9e2-4012-b46f-9b4998d66e00"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:replicationcontrollers/scale",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "12d96a69-6724-41cc-b024-b1da66650bde"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:serviceaccounts",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "546abeb3-6db0-47a0-9c50-a30301f549e7"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:services",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "d6760c1f-ee6e-48c7-9ee6-f1bce407776c"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:services/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "0d0d4b81-7857-4942-a29b-b683ddfb52eb"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:bindings",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "f3598b86-7f36-4113-ad8c-c33fb133c1d1"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:events",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "410ffa1c-bf0c-4d7b-a5ad-0a8bbc409d5c"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:limitranges",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "9cb76c4e-5fed-4f18-a54f-2dcfbca33095"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:namespaces/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "206fd750-534f-4f2f-83d3-bec678daf72e"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:pods/log",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "54cab89b-89a2-4c31-bb51-7b165a76e3be"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:pods/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "1afbb457-9b6a-434c-b176-d44684352d15"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:replicationcontrollers/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "5261ad5b-395e-4c9d-9079-9496e0adad22"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:resourcequotas",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "1fefe941-a5a4-4387-afa7-a0fafc30667e"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:resourcequotas/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "4463878b-a06f-4869-8318-4bbea5b696b4"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:namespaces",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "fe03db67-39ef-447c-be77-038c32f74e47"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:controllerrevisions",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "99688fa2-e343-4edf-b8d7-c99eb191e57a"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:daemonsets",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "78d8800c-4744-410a-98e3-9a460849ccf7"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:daemonsets/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "d5670928-6f3b-41c7-9abf-8d3c698ad888"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:deployments",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "93f3bc79-1bd0-413d-b4b5-73dc8da6d59a"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:deployments/scale",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "e75d6b1f-dca3-424d-8851-fd9b7ce34ea8"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:deployments/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "75173f16-1e7a-44c9-8ab4-cbe42ca53783"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:replicasets",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "d3f35ee6-deaf-468a-a2e6-59f423f63992"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:replicasets/scale",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "77ac4491-7d2f-42b2-a988-4162fd2c0baf"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:replicasets/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "65733069-8e6c-458f-8a5e-9a8637c35396"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:statefulsets",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "658ec894-975c-426e-9230-d74513b1893c"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:statefulsets/scale",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "5e1eac65-7670-4b77-9fb8-dcf9e788c243"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:statefulsets/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "1a6717ee-7bfd-4572-bb07-77001a0f289a"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:horizontalpodautoscalers",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "1bb2369c-dcca-44bb-8dcc-1848c694b8d9"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:horizontalpodautoscalers/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "d879daae-858f-4955-bc42-eed5b7b276eb"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:cronjobs",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "eecfeda0-1844-40e3-a254-e05bbe93ac34"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:cronjobs/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "bc0101f3-9627-4d38-bb84-ba16bec6fef2"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:jobs",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "c5e12492-d8e5-4302-94ca-07b50aa62de8"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:jobs/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "5a6d8977-ef81-4483-897a-1f986e123176"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:daemonsets",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "4a2f9b2e-ed94-4a4a-b707-0637c18ab2e2"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:daemonsets/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "18c7d593-957a-4c33-9ce6-32c389c86632"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:deployments",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "5a44c7e6-ee80-40f3-b526-72fdf909d000"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:deployments/scale",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "9e958f03-c230-47dd-aa1f-2b50d35e2403"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:deployments/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "c54647b9-5c36-4bba-8ee3-77fd67e27016"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:ingresses",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "6726d442-1435-4276-8940-0426d4a1d88c"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:ingresses/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "8a01db26-b7f7-4bf1-a029-b5e3dd00089f"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:networkpolicies",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "5a9a6fc3-313e-47fa-afeb-c62e3394bf06"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:replicasets",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "2e0badb1-64f4-4773-a5e0-f8ec50f537a1"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:replicasets/scale",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "78e4e563-c0a6-4618-9a3b-736c8d330723"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:replicasets/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "3f3b5de8-84f6-4617-85b1-13b3c467c4f8"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:replicationcontrollers/scale",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "b4e3e392-6507-487c-82c1-e41a88aff9ca"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:poddisruptionbudgets",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "4f7d3529-db47-4c63-b5d3-ddaf73d7e93b"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:poddisruptionbudgets/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "39f0b6aa-d1ee-4b8f-8e0a-033052781558"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:ingresses",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "a6622cf5-212d-40ac-b4e8-10983f58a7ac"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:ingresses/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "ae7c46a7-85ab-404b-a6ec-eb61d408ff7f"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:edit",
          "target": "rsc:networkpolicies",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "f04cf34d-6edf-44c1-b793-fcbfae590500"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:kubeadm:get-nodes",
          "target": "rsc:nodes",
          "name": "get",
          "color": "#4b1991",
          "id": "c8310e81-0c98-4b54-85b1-77d12ef5f1e3"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-admin",
          "target": "rsc:localsubjectaccessreviews",
          "name": "create",
          "color": "#4b1991",
          "id": "9e36b866-fa97-4e3e-894b-e2d9ad7acd6b"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-admin",
          "target": "rsc:rolebindings",
          "name": "create,delete,deletecollection,get,list,patch,update,watch",
          "color": "#4b1991",
          "id": "cbd5fc4a-13c0-4582-9bd2-f8361bfd4eca"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-admin",
          "target": "rsc:roles",
          "name": "create,delete,deletecollection,get,list,patch,update,watch",
          "color": "#4b1991",
          "id": "34aebc4e-07a9-4207-8261-2821a09d444c"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-edit",
          "target": "rsc:pods/attach",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "a7f1624d-3ab6-47fd-ad8f-e7e79d2c1a33"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-edit",
          "target": "rsc:pods/exec",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "c21ce058-4c31-4d58-ad4a-232865abeb05"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-edit",
          "target": "rsc:pods/portforward",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "da35e416-56d9-4381-a14e-b1fc28d2f82b"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-edit",
          "target": "rsc:pods/proxy",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "e145a8a6-c2de-46ac-bfc0-0e53bdbad619"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-edit",
          "target": "rsc:secrets",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "f4705f2a-d35c-4d85-8a37-bff541819cdc"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-edit",
          "target": "rsc:services/proxy",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "882d8fb9-676f-4763-ae98-e1b3181deb6f"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-edit",
          "target": "rsc:serviceaccounts",
          "name": "impersonate",
          "color": "#4b1991",
          "id": "b711b590-a8bb-421c-ac25-e0c273b3ffc8"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-edit",
          "target": "rsc:pods",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "2717bcc5-1d9d-4e67-a530-4d0eea11549c"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-edit",
          "target": "rsc:pods/attach",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "91ed6875-0360-4414-8d8d-15a27d6a0a3d"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-edit",
          "target": "rsc:pods/exec",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "a63fa525-7caa-45a1-9eca-a79bcb86b76c"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-edit",
          "target": "rsc:pods/portforward",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "d0d57c18-7d23-4d73-9f86-21b69f8e16b6"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-edit",
          "target": "rsc:pods/proxy",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "bc879bd3-a390-41b3-a2fe-2a1e1e20cf95"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-edit",
          "target": "rsc:configmaps",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "168279ef-c210-4ca1-b268-2bd03d4bcce2"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-edit",
          "target": "rsc:endpoints",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "1ba4c789-cff3-46ba-924d-544c163fd7ea"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-edit",
          "target": "rsc:persistentvolumeclaims",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "5735d44c-64fd-4cc3-b08a-d28951188a47"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-edit",
          "target": "rsc:replicationcontrollers",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "90892474-bdc4-4db8-a8fe-b8e5309f7596"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-edit",
          "target": "rsc:replicationcontrollers/scale",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "f9c9d3d0-82a3-460e-845d-6be5b54b3ed5"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-edit",
          "target": "rsc:secrets",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "dd22e9b7-8cc6-4eb0-8334-af4398d0fcad"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-edit",
          "target": "rsc:serviceaccounts",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "0220133f-932f-41de-ba67-e2df64ec8f22"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-edit",
          "target": "rsc:services",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "187b4ed2-c466-4e62-b821-eab640f4852b"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-edit",
          "target": "rsc:services/proxy",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "614f7e01-8ed1-410a-9f8e-899d25b76244"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-edit",
          "target": "rsc:daemonsets",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "9ab1b4d6-8d06-4ee3-8929-f3b964fd0e29"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-edit",
          "target": "rsc:deployments",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "415fdf88-b3b8-4441-9f97-a6959f1e1d1c"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-edit",
          "target": "rsc:deployments/rollback",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "5240cd88-66a8-4fef-9553-18cbe4a7c2d2"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-edit",
          "target": "rsc:deployments/scale",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "e6e57727-423d-4bd0-bd01-3b7fad405624"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-edit",
          "target": "rsc:replicasets",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "ebbd93bc-8e37-4010-af1a-264c04326361"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-edit",
          "target": "rsc:replicasets/scale",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "8b19f045-cabc-4d0e-9b64-f4b721684758"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-edit",
          "target": "rsc:statefulsets",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "25d61f73-aa10-4178-8413-89fb1b9ea5a1"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-edit",
          "target": "rsc:statefulsets/scale",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "872f0449-9d1a-4608-9a24-d5999d0043bd"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-edit",
          "target": "rsc:horizontalpodautoscalers",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "253d7ba3-037c-4ef3-a10b-4cc55e5f369e"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-edit",
          "target": "rsc:cronjobs",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "55eedcbe-b314-4121-8c1a-c3440082167b"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-edit",
          "target": "rsc:jobs",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "d252a4af-377a-43af-8d92-b4ebec5d7293"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-edit",
          "target": "rsc:daemonsets",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "ae13c580-beea-47de-961b-0626431482ad"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-edit",
          "target": "rsc:deployments",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "766ee3e4-c5f5-469b-a1c7-a1eff3d0023d"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-edit",
          "target": "rsc:deployments/rollback",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "57fcd167-0b75-4ceb-b209-bd7bb85add5a"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-edit",
          "target": "rsc:deployments/scale",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "f615293f-9f30-481a-92c9-5d19bd620497"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-edit",
          "target": "rsc:ingresses",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "e9005c85-6c9c-43ab-bdd0-44af0e133c00"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-edit",
          "target": "rsc:networkpolicies",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "1da8ed4d-5f49-4f5c-9ac3-9ec2049943bc"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-edit",
          "target": "rsc:replicasets",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "7ce5842f-0796-4cbe-ad9d-e5dd0d324a03"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-edit",
          "target": "rsc:replicasets/scale",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "6f281209-9b54-4ad7-840e-bc048305ef34"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-edit",
          "target": "rsc:replicationcontrollers/scale",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "302b04a1-6bfa-42bc-99a2-5156d5068183"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-edit",
          "target": "rsc:poddisruptionbudgets",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "c70ae23f-8d17-4ed8-b262-9fb101235500"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-edit",
          "target": "rsc:ingresses",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "214525ca-99ee-4f58-9bc5-db99be4b2060"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-edit",
          "target": "rsc:networkpolicies",
          "name": "create,delete,deletecollection,patch,update",
          "color": "#4b1991",
          "id": "b16947c4-20cd-4080-8282-a02ce99e8c12"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:configmaps",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "c91cbe3e-d25a-474c-a899-4a426fdf61eb"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:endpoints",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "8f3ac89d-336d-44ed-b0f3-503dacfeec26"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:persistentvolumeclaims",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "161b994c-9010-4fb5-9d6a-b7e994e66582"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:persistentvolumeclaims/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "7b460543-7733-4147-acaf-459cf85785ca"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:pods",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "5c43f7c1-672b-46a4-8756-10738a92f622"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:replicationcontrollers",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "a976f1b8-457f-4a96-824f-d42dae928f2b"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:replicationcontrollers/scale",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "7620770f-7789-46fb-bc19-283f4d9f0b38"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:serviceaccounts",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "e830445b-b27d-4dbd-b4e9-72e68e008c46"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:services",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "8f1292a0-31b5-4a52-a9ae-2c59b54cab78"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:services/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "14092c51-ad70-4f78-bb00-587853d98e8b"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:bindings",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "63002400-2e8e-404d-b703-b6ccfef4a744"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:events",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "310700b5-1025-4f27-b205-08c64098ffaf"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:limitranges",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "59dfb729-4091-4582-b2d6-af3ee948c93a"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:namespaces/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "edf00fc0-499d-449e-8e7b-52fcafe904b3"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:pods/log",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "1f7591b0-3a37-41a6-ab49-684b956c9b96"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:pods/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "ea7a6c40-fdc2-4288-8871-59fc80379f9a"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:replicationcontrollers/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "494d9454-cc04-429b-a21f-7683e2289ee8"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:resourcequotas",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "7e603c53-727d-4b21-aae0-8213eca058fc"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:resourcequotas/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "b7e05572-bf43-493b-a360-0e88e5ea9556"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:namespaces",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "ccdff791-b2f4-48b5-83e0-b68b5c1308bc"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:controllerrevisions",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "bfcc44f3-1b4b-4304-87e2-c9045aec128e"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:daemonsets",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "9e14af44-2c9d-46a5-b158-9ebffff3b270"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:daemonsets/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "908fb9a5-4fb1-48c3-b6a5-e42f32c3aad6"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:deployments",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "6e365712-65b2-4c5e-9f16-e20717697508"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:deployments/scale",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "80be2c37-dab1-43b4-913d-7ea718c24659"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:deployments/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "28af50de-ca31-4bf5-9fee-165c7fca4c6c"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:replicasets",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "f95bd7d1-9a7e-40f0-84d0-a352fcb5c34c"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:replicasets/scale",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "ddc1a8e9-b7f5-4e6b-9854-58c80b3a0738"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:replicasets/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "ba4eb97b-5104-4675-9ba4-96ed38868985"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:statefulsets",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "d6dbf07e-96a2-49b8-b801-85755c3043a4"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:statefulsets/scale",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "6d1b719a-cb18-49de-95f5-b76c612ae491"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:statefulsets/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "0b8b6234-5a08-4fb1-8c76-65890ee55ada"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:horizontalpodautoscalers",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "a0b44b55-7f6d-468e-9155-5e1dc6f33451"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:horizontalpodautoscalers/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "3c245393-5bb5-4409-9330-d6e3f1eb11a7"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:cronjobs",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "b7cb0c2a-bdab-4ef2-b9eb-7894a891f0f5"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:cronjobs/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "243397f5-7d7c-4493-baf3-fd4cdf992852"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:jobs",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "4c017128-41d3-4ee6-8c15-d64ee2ac9133"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:jobs/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "04621715-5f1f-49dd-addc-71ce33ee57b9"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:daemonsets",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "fd0c1130-12c2-4767-bbcc-a6ee482f9fc2"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:daemonsets/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "5457034d-7dc5-4011-baca-d00a62dd0859"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:deployments",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "806a487d-b1da-47d7-a1c9-3e27f4d38ab3"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:deployments/scale",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "e0bab985-2f67-46e7-a952-019494f0632f"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:deployments/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "3ed3c703-8e39-4f4c-89a4-ad0c9a991f2a"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:ingresses",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "8b273fdf-ddf5-4c37-a1cc-2d41959991c7"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:ingresses/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "75ace4d2-c9ae-449a-8a74-2ab51bf4eb0d"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:networkpolicies",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "950323dc-ef3d-470f-81d1-27eff7045684"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:replicasets",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "9ad4cbc1-dc0a-41c5-932e-45a2c7555ad8"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:replicasets/scale",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "6426d5c8-1fce-49a6-9720-09d0f55e3756"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:replicasets/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "125400be-9715-46aa-8c59-fd82befdfec9"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:replicationcontrollers/scale",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "405a8ceb-3a1e-408d-8b24-8e82d5d61bf5"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:poddisruptionbudgets",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "bbc460d1-56fe-490e-911b-bf7e19470ccd"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:poddisruptionbudgets/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "f06c3e5f-880e-40b1-a096-aa938e11df25"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:ingresses",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "bc2b792f-46ea-4fe6-ae56-24312826461c"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:ingresses/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "4f105535-12dc-4edf-846e-03a4bc8f152c"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:aggregate-to-view",
          "target": "rsc:networkpolicies",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "6ec5e495-a6e5-45d5-9ab8-5c21b0bfb803"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:auth-delegator",
          "target": "rsc:tokenreviews",
          "name": "create",
          "color": "#4b1991",
          "id": "3c064a13-ad70-4e74-a128-3ce7f1b7757d"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:auth-delegator",
          "target": "rsc:subjectaccessreviews",
          "name": "create",
          "color": "#4b1991",
          "id": "c3c2aad6-281f-4450-866a-8d36349cb8c7"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:basic-user",
          "target": "rsc:selfsubjectaccessreviews",
          "name": "create",
          "color": "#4b1991",
          "id": "54934614-8085-4490-9f0b-0a5d22d83e38"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:basic-user",
          "target": "rsc:selfsubjectrulesreviews",
          "name": "create",
          "color": "#4b1991",
          "id": "b1c77be4-4bf7-4716-930c-a70ef010c975"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:certificates.k8s.io:certificatesigningrequests:nodeclient",
          "target": "rsc:certificatesigningrequests/nodeclient",
          "name": "create",
          "color": "#4b1991",
          "id": "49f37f91-7626-48da-9007-659064745e98"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:certificates.k8s.io:certificatesigningrequests:selfnodeclient",
          "target": "rsc:certificatesigningrequests/selfnodeclient",
          "name": "create",
          "color": "#4b1991",
          "id": "858fb0ae-934e-40b8-8c47-8a8b6146f3ff"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:certificates.k8s.io:kube-apiserver-client-approver",
          "target": "rsc:signers",
          "name": "approve",
          "color": "#4b1991",
          "id": "24750411-613b-48d3-b1db-9d9e0459a4db"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:certificates.k8s.io:kube-apiserver-client-kubelet-approver",
          "target": "rsc:signers",
          "name": "approve",
          "color": "#4b1991",
          "id": "789c6e9f-3504-4cab-8dbd-532ee59a8b67"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:certificates.k8s.io:kubelet-serving-approver",
          "target": "rsc:signers",
          "name": "approve",
          "color": "#4b1991",
          "id": "03cf3e29-0988-4e95-87da-39a74ba1f4b8"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:certificates.k8s.io:legacy-unknown-approver",
          "target": "rsc:signers",
          "name": "approve",
          "color": "#4b1991",
          "id": "33f1250b-6ee1-4d36-946f-32282e2f00fa"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:attachdetach-controller",
          "target": "rsc:persistentvolumeclaims",
          "name": "list,watch",
          "color": "#4b1991",
          "id": "10f0db86-7bf4-4cf5-ad61-66b00ece4559"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:attachdetach-controller",
          "target": "rsc:persistentvolumes",
          "name": "list,watch",
          "color": "#4b1991",
          "id": "610f2ff5-4517-4328-854c-cd440fd61008"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:attachdetach-controller",
          "target": "rsc:nodes",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "70fe0766-299e-4049-bca3-6a93c9f90a25"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:attachdetach-controller",
          "target": "rsc:nodes/status",
          "name": "patch,update",
          "color": "#4b1991",
          "id": "6bf59d9e-d900-45f1-a078-90e701c35e1b"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:attachdetach-controller",
          "target": "rsc:pods",
          "name": "list,watch",
          "color": "#4b1991",
          "id": "62ae2fa0-2c87-45f6-805c-5cf1e2550cf2"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:attachdetach-controller",
          "target": "rsc:events",
          "name": "create,patch,update",
          "color": "#4b1991",
          "id": "b97f138b-d9bc-4a02-a74c-2fe908407182"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:attachdetach-controller",
          "target": "rsc:volumeattachments",
          "name": "create,delete,get,list,watch",
          "color": "#4b1991",
          "id": "140a18b4-3443-417d-9529-fdd560b424b5"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:attachdetach-controller",
          "target": "rsc:csidrivers",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "9bf2cabc-c705-4bc0-b49b-0b6b39f3ba3d"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:attachdetach-controller",
          "target": "rsc:csinodes",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "1ab3b032-0ed7-4a96-bb34-7e0a96e9a6db"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:certificate-controller",
          "target": "rsc:certificatesigningrequests",
          "name": "delete,get,list,watch",
          "color": "#4b1991",
          "id": "6635a78b-9d45-45e2-8d6f-7761a69af24f"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:certificate-controller",
          "target": "rsc:certificatesigningrequests/approval",
          "name": "update",
          "color": "#4b1991",
          "id": "63691075-d07c-400e-a80d-a666a929429c"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:certificate-controller",
          "target": "rsc:certificatesigningrequests/status",
          "name": "update",
          "color": "#4b1991",
          "id": "49d3db45-6113-4e21-9d75-a3395b0305d8"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:certificate-controller",
          "target": "rsc:signers",
          "name": "approve",
          "color": "#4b1991",
          "id": "98cecfef-d919-4a74-97c6-2483c3741725"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:certificate-controller",
          "target": "rsc:signers",
          "name": "sign",
          "color": "#4b1991",
          "id": "3cc0072f-5896-4d1b-85d4-e7cbde8f27de"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:certificate-controller",
          "target": "rsc:subjectaccessreviews",
          "name": "create",
          "color": "#4b1991",
          "id": "7b669030-38bc-498a-871a-e93c0b5cde4c"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:certificate-controller",
          "target": "rsc:events",
          "name": "create,patch,update",
          "color": "#4b1991",
          "id": "48a3496c-2442-44e7-8847-e0d98fcfc6fe"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:clusterrole-aggregation-controller",
          "target": "rsc:clusterroles",
          "name": "escalate,get,list,patch,update,watch",
          "color": "#4b1991",
          "id": "63a71c35-15f7-475e-aaff-e9d104bd381d"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:cronjob-controller",
          "target": "rsc:cronjobs",
          "name": "get,list,update,watch",
          "color": "#4b1991",
          "id": "95d3dbce-9102-4d89-a264-53fb983475e3"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:cronjob-controller",
          "target": "rsc:jobs",
          "name": "create,delete,get,list,patch,update,watch",
          "color": "#4b1991",
          "id": "2a5b95e3-2d9d-498f-9b8a-11cbc3588f08"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:cronjob-controller",
          "target": "rsc:cronjobs/status",
          "name": "update",
          "color": "#4b1991",
          "id": "15c6b0ca-2d62-4808-bf88-138b95df99ec"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:cronjob-controller",
          "target": "rsc:cronjobs/finalizers",
          "name": "update",
          "color": "#4b1991",
          "id": "03a9ea73-2f72-468c-b60c-21da21599022"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:cronjob-controller",
          "target": "rsc:pods",
          "name": "delete,list",
          "color": "#4b1991",
          "id": "fe646348-1a7f-446d-a570-9bf3c3c240a9"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:cronjob-controller",
          "target": "rsc:events",
          "name": "create,patch,update",
          "color": "#4b1991",
          "id": "1d0b7fc5-e171-41d6-bcdd-7a685753d4ac"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:daemon-set-controller",
          "target": "rsc:daemonsets",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "aed2940e-4d56-4bcc-b51d-e4e792c1c5fe"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:daemon-set-controller",
          "target": "rsc:daemonsets/status",
          "name": "update",
          "color": "#4b1991",
          "id": "ae9578e1-e287-4a7a-8b9c-c7191f5ff7d2"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:daemon-set-controller",
          "target": "rsc:daemonsets/finalizers",
          "name": "update",
          "color": "#4b1991",
          "id": "e4de186b-f644-4a7a-8969-0ffb663e89c8"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:daemon-set-controller",
          "target": "rsc:nodes",
          "name": "list,watch",
          "color": "#4b1991",
          "id": "3ef24164-34fd-4cb2-bb33-fa7fa1426dba"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:daemon-set-controller",
          "target": "rsc:pods",
          "name": "create,delete,list,patch,watch",
          "color": "#4b1991",
          "id": "50f98d46-7160-49fe-97bc-08ff7df6b727"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:daemon-set-controller",
          "target": "rsc:pods/binding",
          "name": "create",
          "color": "#4b1991",
          "id": "ef700418-c3f7-4e9c-bccc-a6619cb90ec7"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:daemon-set-controller",
          "target": "rsc:controllerrevisions",
          "name": "create,delete,get,list,patch,update,watch",
          "color": "#4b1991",
          "id": "3aac8140-177a-40a3-897d-69dc5ed8baa6"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:daemon-set-controller",
          "target": "rsc:events",
          "name": "create,patch,update",
          "color": "#4b1991",
          "id": "e97d1c71-f866-484f-82f6-5513254c017b"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:deployment-controller",
          "target": "rsc:deployments",
          "name": "get,list,update,watch",
          "color": "#4b1991",
          "id": "77e90614-d40a-4264-8333-27ba5d32af4a"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:deployment-controller",
          "target": "rsc:deployments/status",
          "name": "update",
          "color": "#4b1991",
          "id": "dc61902f-dd11-4f7f-ad0c-6c89ff698c35"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:deployment-controller",
          "target": "rsc:deployments/finalizers",
          "name": "update",
          "color": "#4b1991",
          "id": "a1e2c1f0-c778-497a-a175-18ae8afd9db8"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:deployment-controller",
          "target": "rsc:replicasets",
          "name": "create,delete,get,list,patch,update,watch",
          "color": "#4b1991",
          "id": "1081a18e-18e6-45e6-a7af-0f4ffd99ef40"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:deployment-controller",
          "target": "rsc:pods",
          "name": "get,list,update,watch",
          "color": "#4b1991",
          "id": "0db2e326-b313-4619-bf54-1303c07b7c9a"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:deployment-controller",
          "target": "rsc:events",
          "name": "create,patch,update",
          "color": "#4b1991",
          "id": "65b4aa4f-402f-4471-93ae-5ecbc111ee9e"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:disruption-controller",
          "target": "rsc:deployments",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "5ee3f9c0-27cc-4d62-a504-ce805befe3f7"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:disruption-controller",
          "target": "rsc:replicasets",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "bd66e971-c83b-4924-ae11-86634e70ecc6"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:disruption-controller",
          "target": "rsc:replicationcontrollers",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "ee6b7656-01fe-4bd6-98b2-2fe36e6840ab"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:disruption-controller",
          "target": "rsc:poddisruptionbudgets",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "3dddf6a4-78a1-4092-9af1-84d54296f720"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:disruption-controller",
          "target": "rsc:statefulsets",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "675585b1-83e6-4b7a-9635-75f35ea6c20b"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:disruption-controller",
          "target": "rsc:poddisruptionbudgets/status",
          "name": "update",
          "color": "#4b1991",
          "id": "b6529ad5-9cef-4744-9ef6-db418570e59c"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:disruption-controller",
          "target": "rsc:*/scale",
          "name": "get",
          "color": "#4b1991",
          "id": "83ae065e-2aff-46b4-95aa-050f10829744"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:disruption-controller",
          "target": "rsc:events",
          "name": "create,patch,update",
          "color": "#4b1991",
          "id": "9a255414-8920-4960-ae52-68576c15ed22"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:endpoint-controller",
          "target": "rsc:pods",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "b37ddcb8-8554-4da4-a5a7-f50d498b71d9"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:endpoint-controller",
          "target": "rsc:services",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "2b120536-fbc7-496c-9282-47073b791cca"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:endpoint-controller",
          "target": "rsc:endpoints",
          "name": "create,delete,get,list,update",
          "color": "#4b1991",
          "id": "36e967af-cbd9-4853-842d-b66ca0773b7c"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:endpoint-controller",
          "target": "rsc:endpoints/restricted",
          "name": "create",
          "color": "#4b1991",
          "id": "fd8e2662-65cd-47ec-8f20-5937e125e195"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:endpoint-controller",
          "target": "rsc:events",
          "name": "create,patch,update",
          "color": "#4b1991",
          "id": "7dc4736e-6a04-45ee-9559-c7f3a035b82a"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:endpointslice-controller",
          "target": "rsc:nodes",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "1612fa63-fadd-4dd5-843a-559e5b6bbca0"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:endpointslice-controller",
          "target": "rsc:pods",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "c3b3daea-322b-4f84-8165-552950da305c"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:endpointslice-controller",
          "target": "rsc:services",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "1b030263-5873-429e-aaa9-aebe76ab26ea"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:endpointslice-controller",
          "target": "rsc:services/finalizers",
          "name": "update",
          "color": "#4b1991",
          "id": "e4483359-632e-4a93-a832-6a0a5572b0c1"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:endpointslice-controller",
          "target": "rsc:endpointslices",
          "name": "create,delete,get,list,update",
          "color": "#4b1991",
          "id": "47b24bc7-b37b-4791-8348-ca8807d918bd"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:endpointslice-controller",
          "target": "rsc:events",
          "name": "create,patch,update",
          "color": "#4b1991",
          "id": "c766f55e-7fe8-474a-bb1c-1f3828d9aab8"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:endpointslicemirroring-controller",
          "target": "rsc:endpoints",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "e9fe1072-5402-433b-8c24-3bf4cccbecc9"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:endpointslicemirroring-controller",
          "target": "rsc:services",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "d27cdab5-e884-4b39-9ff1-4411956b4c4a"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:endpointslicemirroring-controller",
          "target": "rsc:services/finalizers",
          "name": "update",
          "color": "#4b1991",
          "id": "6d701fc0-1015-4e1a-9ce1-af5e4c46f51e"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:endpointslicemirroring-controller",
          "target": "rsc:endpoints/finalizers",
          "name": "update",
          "color": "#4b1991",
          "id": "1b2b9d4f-d3ab-4869-b632-7dc2ff053eec"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:endpointslicemirroring-controller",
          "target": "rsc:endpointslices",
          "name": "create,delete,get,list,update",
          "color": "#4b1991",
          "id": "bf6a8be5-e908-4020-88c2-ed8cf71a036e"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:endpointslicemirroring-controller",
          "target": "rsc:events",
          "name": "create,patch,update",
          "color": "#4b1991",
          "id": "644c5f9f-ab6a-46a2-9b5b-2e763b0bcd1a"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:expand-controller",
          "target": "rsc:persistentvolumes",
          "name": "get,list,patch,update,watch",
          "color": "#4b1991",
          "id": "0e373625-a8fa-4806-930d-fe2d46f4e59e"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:expand-controller",
          "target": "rsc:persistentvolumeclaims/status",
          "name": "patch,update",
          "color": "#4b1991",
          "id": "f9a01b21-345f-45c7-8f5d-a0b378265d42"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:expand-controller",
          "target": "rsc:persistentvolumeclaims",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "ed891088-46fc-4723-a4d9-dc60e7e697f0"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:expand-controller",
          "target": "rsc:storageclasses",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "200ab954-172b-4655-a0a7-e1757c835dfd"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:expand-controller",
          "target": "rsc:endpoints",
          "name": "get",
          "color": "#4b1991",
          "id": "eef5624f-4d11-4d23-88bb-9a5e15388ab1"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:expand-controller",
          "target": "rsc:services",
          "name": "get",
          "color": "#4b1991",
          "id": "7bcb89a4-ed08-493f-99dd-472770381d4d"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:expand-controller",
          "target": "rsc:secrets",
          "name": "get",
          "color": "#4b1991",
          "id": "b831d688-051e-4e1f-9512-b6eed2561a16"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:expand-controller",
          "target": "rsc:events",
          "name": "create,patch,update",
          "color": "#4b1991",
          "id": "bf578365-66fc-482a-9c34-378e3ca6cc4a"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:generic-garbage-collector",
          "target": "rsc:*",
          "name": "delete,get,list,patch,update,watch",
          "color": "#4b1991",
          "id": "870d9c58-8c2c-4418-9be9-4d759ab7bbfa"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:generic-garbage-collector",
          "target": "rsc:events",
          "name": "create,patch,update",
          "color": "#4b1991",
          "id": "891e68ec-dfc2-42c7-982f-82c728f4bebd"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:horizontal-pod-autoscaler",
          "target": "rsc:horizontalpodautoscalers",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "8c855956-b23a-4912-8c3d-a9092f4c827d"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:horizontal-pod-autoscaler",
          "target": "rsc:horizontalpodautoscalers/status",
          "name": "update",
          "color": "#4b1991",
          "id": "c6eb67a0-6f39-4d0a-80c8-8643a2f7626a"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:horizontal-pod-autoscaler",
          "target": "rsc:*/scale",
          "name": "get,update",
          "color": "#4b1991",
          "id": "8694e4d6-810f-4e58-87ff-88a5a1b5492b"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:horizontal-pod-autoscaler",
          "target": "rsc:pods",
          "name": "list",
          "color": "#4b1991",
          "id": "40439721-f23e-49be-a667-e16f66997a49"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:horizontal-pod-autoscaler",
          "target": "rsc:services/proxy",
          "name": "get",
          "color": "#4b1991",
          "id": "54f333cc-cb37-47cb-820f-abdeeca21ba2"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:horizontal-pod-autoscaler",
          "target": "rsc:pods",
          "name": "list",
          "color": "#4b1991",
          "id": "b2bd8903-64e8-4674-9e1d-544ba6883777"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:horizontal-pod-autoscaler",
          "target": "rsc:*",
          "name": "get,list",
          "color": "#4b1991",
          "id": "e5fa1630-9329-43bf-aab2-4f0db4e5bf52"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:horizontal-pod-autoscaler",
          "target": "rsc:events",
          "name": "create,patch,update",
          "color": "#4b1991",
          "id": "3e360499-8a94-4d7a-b54e-18f8f3224c21"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:job-controller",
          "target": "rsc:jobs",
          "name": "get,list,update,watch",
          "color": "#4b1991",
          "id": "21e04ac5-4ff5-428f-8c68-46c49dc9ae14"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:job-controller",
          "target": "rsc:jobs/status",
          "name": "update",
          "color": "#4b1991",
          "id": "6aab22e1-e2ba-4be5-9827-85e8f07e8e8a"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:job-controller",
          "target": "rsc:jobs/finalizers",
          "name": "update",
          "color": "#4b1991",
          "id": "ecfb39d1-5b43-406b-8bbf-4374c8a65420"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:job-controller",
          "target": "rsc:pods",
          "name": "create,delete,list,patch,watch",
          "color": "#4b1991",
          "id": "967a46f0-65b5-4656-a654-5b1b3e126b7e"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:job-controller",
          "target": "rsc:events",
          "name": "create,patch,update",
          "color": "#4b1991",
          "id": "e40c8c8c-3fce-45ea-ba8b-20ed5bbe512c"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:namespace-controller",
          "target": "rsc:namespaces",
          "name": "delete,get,list,watch",
          "color": "#4b1991",
          "id": "e2dfa33c-a422-42fd-9990-050bc452fd12"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:namespace-controller",
          "target": "rsc:namespaces/finalize",
          "name": "update",
          "color": "#4b1991",
          "id": "b20a3f68-c0ef-49cc-a5db-1557ee9014a4"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:namespace-controller",
          "target": "rsc:namespaces/status",
          "name": "update",
          "color": "#4b1991",
          "id": "8aa3f2d7-df43-4995-92c2-5d852fa1ef1e"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:namespace-controller",
          "target": "rsc:*",
          "name": "delete,deletecollection,get,list",
          "color": "#4b1991",
          "id": "0089c451-a3ab-481a-b96b-824c9c99756e"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:node-controller",
          "target": "rsc:nodes",
          "name": "delete,get,list,patch,update",
          "color": "#4b1991",
          "id": "17dadc5d-3d57-4cfd-b4db-59954c46b3f8"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:node-controller",
          "target": "rsc:nodes/status",
          "name": "patch,update",
          "color": "#4b1991",
          "id": "ed4b6843-d41e-4dfc-801e-42557b5913e1"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:node-controller",
          "target": "rsc:pods/status",
          "name": "update",
          "color": "#4b1991",
          "id": "5b9813a6-c513-4591-9e62-79df02a4c629"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:node-controller",
          "target": "rsc:pods",
          "name": "delete,list",
          "color": "#4b1991",
          "id": "d300d55b-126e-41ed-bd6d-b772acadab54"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:node-controller",
          "target": "rsc:events",
          "name": "create,patch,update",
          "color": "#4b1991",
          "id": "d7fe1f96-b8b5-4488-abd6-570b4ee08b0b"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:persistent-volume-binder",
          "target": "rsc:persistentvolumes",
          "name": "create,delete,get,list,update,watch",
          "color": "#4b1991",
          "id": "b1b9fb54-1215-4bdc-8f0b-98112b1ac785"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:persistent-volume-binder",
          "target": "rsc:persistentvolumes/status",
          "name": "update",
          "color": "#4b1991",
          "id": "04d4792f-a4b4-4235-9fc9-41e52548bf36"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:persistent-volume-binder",
          "target": "rsc:persistentvolumeclaims",
          "name": "get,list,update,watch",
          "color": "#4b1991",
          "id": "385a70ed-211b-4e15-9bfa-1018badd3d25"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:persistent-volume-binder",
          "target": "rsc:persistentvolumeclaims/status",
          "name": "update",
          "color": "#4b1991",
          "id": "dfa19826-17cd-4531-ba4d-6e13b461cce2"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:persistent-volume-binder",
          "target": "rsc:pods",
          "name": "create,delete,get,list,watch",
          "color": "#4b1991",
          "id": "2e960dce-1810-4c97-bee9-8be16415ebf7"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:persistent-volume-binder",
          "target": "rsc:storageclasses",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "d9419070-cf22-460b-aca6-396b0116df8e"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:persistent-volume-binder",
          "target": "rsc:endpoints",
          "name": "create,delete,get,update",
          "color": "#4b1991",
          "id": "87caa409-cea6-4136-b370-a58ca11d8ee1"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:persistent-volume-binder",
          "target": "rsc:services",
          "name": "create,delete,get",
          "color": "#4b1991",
          "id": "cc7d4528-0d23-4c6e-bef2-ab866c4c1468"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:persistent-volume-binder",
          "target": "rsc:secrets",
          "name": "get",
          "color": "#4b1991",
          "id": "90fda4d0-ccbc-42e5-b259-8f6de9ebae14"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:persistent-volume-binder",
          "target": "rsc:nodes",
          "name": "get,list",
          "color": "#4b1991",
          "id": "f215a89a-69b1-4358-b219-7b39704f0e05"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:persistent-volume-binder",
          "target": "rsc:events",
          "name": "watch",
          "color": "#4b1991",
          "id": "f801aedf-1670-403a-897c-e47d8a2654ee"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:persistent-volume-binder",
          "target": "rsc:events",
          "name": "create,patch,update",
          "color": "#4b1991",
          "id": "0613751d-135c-4efa-ac95-e8a0f7b10672"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:pod-garbage-collector",
          "target": "rsc:pods",
          "name": "delete,list,watch",
          "color": "#4b1991",
          "id": "f163c9fb-a6fe-4b36-9c5a-e405ac62d997"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:pod-garbage-collector",
          "target": "rsc:nodes",
          "name": "get,list",
          "color": "#4b1991",
          "id": "5f468197-6a3d-4582-ad47-e57d83408f5d"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:pv-protection-controller",
          "target": "rsc:persistentvolumes",
          "name": "get,list,update,watch",
          "color": "#4b1991",
          "id": "6a02f0e9-9caf-432d-b567-6ee003f18ece"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:pv-protection-controller",
          "target": "rsc:events",
          "name": "create,patch,update",
          "color": "#4b1991",
          "id": "0debf761-4d57-4e90-8ebc-2ffc527e6774"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:pvc-protection-controller",
          "target": "rsc:persistentvolumeclaims",
          "name": "get,list,update,watch",
          "color": "#4b1991",
          "id": "d826a418-7a53-40c8-8cfd-f8469d2c9625"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:pvc-protection-controller",
          "target": "rsc:pods",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "89e22df1-0095-4019-8f75-8488f01ce242"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:pvc-protection-controller",
          "target": "rsc:events",
          "name": "create,patch,update",
          "color": "#4b1991",
          "id": "fd207670-5522-4369-b2ab-c8c441b2c50c"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:replicaset-controller",
          "target": "rsc:replicasets",
          "name": "get,list,update,watch",
          "color": "#4b1991",
          "id": "c935d3b5-d471-4479-919f-a870b92d0700"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:replicaset-controller",
          "target": "rsc:replicasets/status",
          "name": "update",
          "color": "#4b1991",
          "id": "e8ad39c2-c426-4cfa-8943-8096b28ae1b0"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:replicaset-controller",
          "target": "rsc:replicasets/finalizers",
          "name": "update",
          "color": "#4b1991",
          "id": "6c28848b-0620-4506-9ee6-47257648dc71"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:replicaset-controller",
          "target": "rsc:pods",
          "name": "create,delete,list,patch,watch",
          "color": "#4b1991",
          "id": "c09d7afd-895b-4357-8227-8dedc99ff5eb"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:replicaset-controller",
          "target": "rsc:events",
          "name": "create,patch,update",
          "color": "#4b1991",
          "id": "cea53597-6195-45a3-803e-5918716246ac"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:replication-controller",
          "target": "rsc:replicationcontrollers",
          "name": "get,list,update,watch",
          "color": "#4b1991",
          "id": "ece9ffa2-1adf-43a8-9943-50c87c8a3516"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:replication-controller",
          "target": "rsc:replicationcontrollers/status",
          "name": "update",
          "color": "#4b1991",
          "id": "d8ed1c24-ed7d-47a3-9bf8-8cb587b79346"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:replication-controller",
          "target": "rsc:replicationcontrollers/finalizers",
          "name": "update",
          "color": "#4b1991",
          "id": "e45149cb-e281-421f-b2b6-e4b7849a334b"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:replication-controller",
          "target": "rsc:pods",
          "name": "create,delete,list,patch,watch",
          "color": "#4b1991",
          "id": "f22ab642-d9cb-4f04-b5ee-a39911c1ed57"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:replication-controller",
          "target": "rsc:events",
          "name": "create,patch,update",
          "color": "#4b1991",
          "id": "46555294-7987-4786-9919-0d91e752a4b1"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:resourcequota-controller",
          "target": "rsc:*",
          "name": "list,watch",
          "color": "#4b1991",
          "id": "67c8885c-5adf-430d-bfcc-632560e9a7d0"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:resourcequota-controller",
          "target": "rsc:resourcequotas/status",
          "name": "update",
          "color": "#4b1991",
          "id": "22a76cc6-b511-455c-9ee7-af046460698b"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:resourcequota-controller",
          "target": "rsc:events",
          "name": "create,patch,update",
          "color": "#4b1991",
          "id": "4456586a-930c-4640-b313-71b747c63087"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:root-ca-cert-publisher",
          "target": "rsc:configmaps",
          "name": "create,update",
          "color": "#4b1991",
          "id": "4ec97259-2d21-43d5-bf7a-1129e5879f3d"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:root-ca-cert-publisher",
          "target": "rsc:events",
          "name": "create,patch,update",
          "color": "#4b1991",
          "id": "0a13a8cf-fd04-4d88-989a-d49d152bbd4b"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:route-controller",
          "target": "rsc:nodes",
          "name": "list,watch",
          "color": "#4b1991",
          "id": "6e9408d1-119a-44bb-8d38-2897a29c5574"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:route-controller",
          "target": "rsc:nodes/status",
          "name": "patch",
          "color": "#4b1991",
          "id": "52b143cb-1d30-41de-9b03-b9e0f03541eb"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:route-controller",
          "target": "rsc:events",
          "name": "create,patch,update",
          "color": "#4b1991",
          "id": "55a9782d-e72f-4791-b3ca-47b6eb6fde09"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:service-account-controller",
          "target": "rsc:serviceaccounts",
          "name": "create",
          "color": "#4b1991",
          "id": "ebca7bbc-7e40-4800-bcf3-3be84550b074"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:service-account-controller",
          "target": "rsc:events",
          "name": "create,patch,update",
          "color": "#4b1991",
          "id": "43f92ae1-d575-4d50-a16a-5247e7c5e8d7"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:service-controller",
          "target": "rsc:services",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "d831468f-edf3-4382-9476-b75f32c740a3"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:service-controller",
          "target": "rsc:services/status",
          "name": "patch,update",
          "color": "#4b1991",
          "id": "5946f741-0ccf-4c5c-970d-ee684d15bce6"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:service-controller",
          "target": "rsc:nodes",
          "name": "list,watch",
          "color": "#4b1991",
          "id": "5bca57d1-92e4-4c0c-84fb-44e328f797d9"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:service-controller",
          "target": "rsc:events",
          "name": "create,patch,update",
          "color": "#4b1991",
          "id": "28fce09a-f4ac-4d5b-b2cc-8e6b9b1fb84e"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:statefulset-controller",
          "target": "rsc:pods",
          "name": "list,watch",
          "color": "#4b1991",
          "id": "85ee08ca-4290-480a-a5e8-4634496577e5"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:statefulset-controller",
          "target": "rsc:statefulsets",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "f797cdcc-8d1e-49d9-9318-f9e2daacb0e0"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:statefulset-controller",
          "target": "rsc:statefulsets/status",
          "name": "update",
          "color": "#4b1991",
          "id": "2144e436-c9ab-46dc-88e7-8d067d4dbb71"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:statefulset-controller",
          "target": "rsc:statefulsets/finalizers",
          "name": "update",
          "color": "#4b1991",
          "id": "6aff6497-65df-4203-a679-7beacbdd8cf4"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:statefulset-controller",
          "target": "rsc:pods",
          "name": "create,delete,get,patch,update",
          "color": "#4b1991",
          "id": "1db7ad42-8539-4954-90b4-472df4c90cef"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:statefulset-controller",
          "target": "rsc:controllerrevisions",
          "name": "create,delete,get,list,patch,update,watch",
          "color": "#4b1991",
          "id": "156355fa-37d1-400d-a9ad-7f294aaccf35"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:statefulset-controller",
          "target": "rsc:persistentvolumeclaims",
          "name": "create,get",
          "color": "#4b1991",
          "id": "75e593cb-199f-4fc4-bb9d-06a7352f7849"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:statefulset-controller",
          "target": "rsc:events",
          "name": "create,patch,update",
          "color": "#4b1991",
          "id": "fd05451d-068e-4af9-8831-e1df9e52fa53"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:ttl-controller",
          "target": "rsc:nodes",
          "name": "list,patch,update,watch",
          "color": "#4b1991",
          "id": "43354ad4-87dd-48a9-a95c-01ebc264b5d9"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:controller:ttl-controller",
          "target": "rsc:events",
          "name": "create,patch,update",
          "color": "#4b1991",
          "id": "34cccf05-f604-48b5-a844-a65971522128"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:coredns",
          "target": "rsc:endpoints",
          "name": "list,watch",
          "color": "#4b1991",
          "id": "983cd6bd-560f-42c9-a0b0-a1225377b05e"
        },
        "position": {
          "x": null,
          "y": null
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:coredns",
          "target": "rsc:services",
          "name": "list,watch",
          "color": "#4b1991",
          "id": "9d4a2865-24b9-4628-86ea-e419f6f73168"
        },
        "position": {
          "x": null,
          "y": null
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:coredns",
          "target": "rsc:pods",
          "name": "list,watch",
          "color": "#4b1991",
          "id": "d63a0d70-bfb0-44f2-a90a-7a3758d0e0b1"
        },
        "position": {
          "x": null,
          "y": null
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:coredns",
          "target": "rsc:namespaces",
          "name": "list,watch",
          "color": "#4b1991",
          "id": "f2df90f6-3961-4646-a317-9dc9447cc5bb"
        },
        "position": {
          "x": null,
          "y": null
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:coredns",
          "target": "rsc:nodes",
          "name": "get",
          "color": "#4b1991",
          "id": "281ecb59-900b-4d58-898e-1f8cc8351a32"
        },
        "position": {
          "x": null,
          "y": null
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:heapster",
          "target": "rsc:events",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "a28f61fe-ad06-43e3-b801-905eeb486c72"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:heapster",
          "target": "rsc:namespaces",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "a79b50f2-deef-438a-935f-9edaab4acd76"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:heapster",
          "target": "rsc:nodes",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "c783d14a-cbc3-4bf2-ae02-926accdca322"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:heapster",
          "target": "rsc:pods",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "c04f5f53-e913-42cb-9482-fea8d4ac5ebc"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:heapster",
          "target": "rsc:deployments",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "e32b5a0d-9b50-480f-b107-86eae8b6e4c8"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kube-aggregator",
          "target": "rsc:endpoints",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "a9c79a28-9189-45cf-9cea-dbf4ab637fc3"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kube-aggregator",
          "target": "rsc:services",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "437dc3c5-7330-45d4-8882-40d1a74b54da"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kube-controller-manager",
          "target": "rsc:events",
          "name": "create,patch,update",
          "color": "#4b1991",
          "id": "e50ac058-08b6-41c6-94a4-b0ae6d85f4a1"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kube-controller-manager",
          "target": "rsc:leases",
          "name": "create",
          "color": "#4b1991",
          "id": "21adc285-56e8-4e44-bba9-09f3a00e628e"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kube-controller-manager",
          "target": "rsc:leases",
          "name": "get,update",
          "color": "#4b1991",
          "id": "4193ba5f-2786-4cd1-b615-b87d1ce404aa"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kube-controller-manager",
          "target": "rsc:endpoints",
          "name": "create",
          "color": "#4b1991",
          "id": "ee3527ce-6eb0-4370-8f44-5b109d2ee26c"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kube-controller-manager",
          "target": "rsc:endpoints",
          "name": "get,update",
          "color": "#4b1991",
          "id": "94bb93fc-769a-4dc1-9e35-3b8c3783bacc"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kube-controller-manager",
          "target": "rsc:secrets",
          "name": "create",
          "color": "#4b1991",
          "id": "5b269a8e-1259-46dd-847b-d5bbf20ff073"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kube-controller-manager",
          "target": "rsc:serviceaccounts",
          "name": "create",
          "color": "#4b1991",
          "id": "dd8e68c9-c9e8-48d1-9e0a-3259bb4c2af0"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kube-controller-manager",
          "target": "rsc:secrets",
          "name": "delete",
          "color": "#4b1991",
          "id": "c7e2e295-3a13-436b-ba15-33557ae8eea9"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kube-controller-manager",
          "target": "rsc:configmaps",
          "name": "get",
          "color": "#4b1991",
          "id": "1f00d889-9a9a-4b4e-b8e6-0a74d9e50017"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kube-controller-manager",
          "target": "rsc:namespaces",
          "name": "get",
          "color": "#4b1991",
          "id": "796d719f-09d3-4fd6-9331-e29e72c43bb0"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kube-controller-manager",
          "target": "rsc:secrets",
          "name": "get",
          "color": "#4b1991",
          "id": "9cdf4042-b60c-479b-9399-c47448beb657"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kube-controller-manager",
          "target": "rsc:serviceaccounts",
          "name": "get",
          "color": "#4b1991",
          "id": "4186eeba-a6fd-4a73-ae59-a32c01e4f317"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kube-controller-manager",
          "target": "rsc:secrets",
          "name": "update",
          "color": "#4b1991",
          "id": "c877b00b-3d50-4506-b89e-ba79be589368"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kube-controller-manager",
          "target": "rsc:serviceaccounts",
          "name": "update",
          "color": "#4b1991",
          "id": "7ffefa19-61f8-4d10-9011-fe30fa20fbd9"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kube-controller-manager",
          "target": "rsc:tokenreviews",
          "name": "create",
          "color": "#4b1991",
          "id": "42f77229-6553-4b6d-832b-7f23e0a470fe"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kube-controller-manager",
          "target": "rsc:subjectaccessreviews",
          "name": "create",
          "color": "#4b1991",
          "id": "7773b2ad-679d-47ec-af15-503b5f7436d1"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kube-controller-manager",
          "target": "rsc:*",
          "name": "list,watch",
          "color": "#4b1991",
          "id": "36eb389b-d8c3-4541-a25a-599efb11224c"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kube-controller-manager",
          "target": "rsc:serviceaccounts/token",
          "name": "create",
          "color": "#4b1991",
          "id": "836875ef-738e-4c97-a526-f2ac0a5a53ac"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kube-dns",
          "target": "rsc:endpoints",
          "name": "list,watch",
          "color": "#4b1991",
          "id": "30244e05-bcaa-4f34-8341-589470ecb0c9"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kube-dns",
          "target": "rsc:services",
          "name": "list,watch",
          "color": "#4b1991",
          "id": "9ef7f01e-20fd-40a5-b8e1-655d95571dab"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kube-scheduler",
          "target": "rsc:events",
          "name": "create,patch,update",
          "color": "#4b1991",
          "id": "25d9e925-64ff-4117-b47c-443428eb3e05"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kube-scheduler",
          "target": "rsc:leases",
          "name": "create",
          "color": "#4b1991",
          "id": "f9ab9764-c259-4e3b-9c49-4033f73f0cab"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kube-scheduler",
          "target": "rsc:leases",
          "name": "get,update",
          "color": "#4b1991",
          "id": "5d8c817a-9856-4e63-be5e-3c675f4301b7"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kube-scheduler",
          "target": "rsc:endpoints",
          "name": "create",
          "color": "#4b1991",
          "id": "a87ba45b-50de-487f-9010-4cddbca9a4ab"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kube-scheduler",
          "target": "rsc:endpoints",
          "name": "get,update",
          "color": "#4b1991",
          "id": "eb6918fd-be87-4a9b-8404-809bf17fc17e"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kube-scheduler",
          "target": "rsc:nodes",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "4d7f7df1-093b-4281-b762-f1b993f03260"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kube-scheduler",
          "target": "rsc:pods",
          "name": "delete,get,list,watch",
          "color": "#4b1991",
          "id": "dac54156-0f31-45f1-9c0c-25d3fa493e66"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kube-scheduler",
          "target": "rsc:bindings",
          "name": "create",
          "color": "#4b1991",
          "id": "132cf22d-753a-42e6-b659-be72524ec996"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kube-scheduler",
          "target": "rsc:pods/binding",
          "name": "create",
          "color": "#4b1991",
          "id": "e122b0d0-4eb3-43f5-8ecd-1b5e2817e95e"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kube-scheduler",
          "target": "rsc:pods/status",
          "name": "patch,update",
          "color": "#4b1991",
          "id": "289ab45a-46a8-4ea8-8ed3-b22d2c247bbe"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kube-scheduler",
          "target": "rsc:replicationcontrollers",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "bc7cd6ab-c606-4f92-b211-3e77a48bada0"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kube-scheduler",
          "target": "rsc:services",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "d40942b6-4d13-4a64-b4ca-97a2a16038c2"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kube-scheduler",
          "target": "rsc:replicasets",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "c2747af5-8ae8-480c-b541-3f887665524c"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kube-scheduler",
          "target": "rsc:statefulsets",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "a2529a20-b2af-4ac3-bc78-6e62d363c40c"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kube-scheduler",
          "target": "rsc:poddisruptionbudgets",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "f815aafd-0ede-4c50-a8e9-4713a97e3c32"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kube-scheduler",
          "target": "rsc:persistentvolumeclaims",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "a0a31a9a-f561-467d-ab03-e6e39be0890c"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kube-scheduler",
          "target": "rsc:persistentvolumes",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "aa7ef2df-e1d6-443e-bc8d-7f49d86ec494"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kube-scheduler",
          "target": "rsc:tokenreviews",
          "name": "create",
          "color": "#4b1991",
          "id": "b95fa72a-10cc-4d2f-931c-e02051273369"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kube-scheduler",
          "target": "rsc:subjectaccessreviews",
          "name": "create",
          "color": "#4b1991",
          "id": "20c67da5-da1b-4518-999e-cecf7cfd3a7e"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kube-scheduler",
          "target": "rsc:csinodes",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "69f4922b-08c7-48b7-9dae-e4f14ae485bf"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kubelet-api-admin",
          "target": "rsc:nodes",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "4f557542-a0d0-4aab-91d8-7b3cea86c172"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kubelet-api-admin",
          "target": "rsc:nodes",
          "name": "proxy",
          "color": "#4b1991",
          "id": "7b5c2887-6a76-4c93-8ff0-53913fd9ddaa"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kubelet-api-admin",
          "target": "rsc:nodes/log",
          "name": "*",
          "color": "#4b1991",
          "id": "2da6bb5e-d3b4-4a46-967e-5c6ddb5a8207"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kubelet-api-admin",
          "target": "rsc:nodes/metrics",
          "name": "*",
          "color": "#4b1991",
          "id": "299885b8-e3e0-46f0-bb3e-56032479afc5"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kubelet-api-admin",
          "target": "rsc:nodes/proxy",
          "name": "*",
          "color": "#4b1991",
          "id": "1c64e557-1d78-4d6b-805d-72eb92e7e280"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kubelet-api-admin",
          "target": "rsc:nodes/spec",
          "name": "*",
          "color": "#4b1991",
          "id": "02228d1d-e450-4f71-841c-92369df189b7"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:kubelet-api-admin",
          "target": "rsc:nodes/stats",
          "name": "*",
          "color": "#4b1991",
          "id": "3fa391b1-b30f-4c4c-80be-7bdf4ac4a59f"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:node",
          "target": "rsc:tokenreviews",
          "name": "create",
          "color": "#4b1991",
          "id": "ab2f9a0f-4966-4740-83c7-b8a7a045af04"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:node",
          "target": "rsc:localsubjectaccessreviews",
          "name": "create",
          "color": "#4b1991",
          "id": "031d6e3b-4181-429d-a7b9-5ce2b7ec5d8b"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:node",
          "target": "rsc:subjectaccessreviews",
          "name": "create",
          "color": "#4b1991",
          "id": "6ec59889-3d6e-4df2-a748-cba130808c74"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:node",
          "target": "rsc:services",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "91b42706-a409-4454-bdcc-f3bfadc8667b"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:node",
          "target": "rsc:nodes",
          "name": "create,get,list,watch",
          "color": "#4b1991",
          "id": "a4c672e7-02e5-4317-8806-55d3a85c760d"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:node",
          "target": "rsc:nodes/status",
          "name": "patch,update",
          "color": "#4b1991",
          "id": "54eac214-87cd-4a84-a7ce-9c81df02b215"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:node",
          "target": "rsc:nodes",
          "name": "patch,update",
          "color": "#4b1991",
          "id": "9f896197-88e1-484a-aa50-ebc8e80eb43f"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:node",
          "target": "rsc:events",
          "name": "create,patch,update",
          "color": "#4b1991",
          "id": "52e22f34-1e25-4f84-ab2a-6d8ac3fe5696"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:node",
          "target": "rsc:pods",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "df1906c2-96d3-49a0-9993-6bbb29488e0e"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:node",
          "target": "rsc:pods",
          "name": "create,delete",
          "color": "#4b1991",
          "id": "6106542a-68b0-4057-bd10-88720aae808c"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:node",
          "target": "rsc:pods/status",
          "name": "patch,update",
          "color": "#4b1991",
          "id": "d2842636-7ad5-4d3e-8420-b2162226560e"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:node",
          "target": "rsc:pods/eviction",
          "name": "create",
          "color": "#4b1991",
          "id": "89c3fe40-1f1a-4970-951a-22e5b8bd0733"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:node",
          "target": "rsc:configmaps",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "970d28a9-3a2e-47f9-b576-38648f10bd60"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:node",
          "target": "rsc:secrets",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "031bfbee-372b-4b9e-ac37-4c4f53ddcec4"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:node",
          "target": "rsc:persistentvolumeclaims",
          "name": "get",
          "color": "#4b1991",
          "id": "0f55b3d9-d3bb-4352-8210-8abdaf763ac1"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:node",
          "target": "rsc:persistentvolumes",
          "name": "get",
          "color": "#4b1991",
          "id": "b6f0f231-4c7d-4dfe-89be-946789d1c86d"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:node",
          "target": "rsc:endpoints",
          "name": "get",
          "color": "#4b1991",
          "id": "96aa8cfa-1382-4a1c-a46e-6026bf11dcbe"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:node",
          "target": "rsc:certificatesigningrequests",
          "name": "create,get,list,watch",
          "color": "#4b1991",
          "id": "8e0172e1-d2c7-4bae-b5c1-2a81f0e523a3"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:node",
          "target": "rsc:leases",
          "name": "create,delete,get,patch,update",
          "color": "#4b1991",
          "id": "8ae38a03-16a4-4bcd-b548-ac0deae27e45"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:node",
          "target": "rsc:volumeattachments",
          "name": "get",
          "color": "#4b1991",
          "id": "c55b7eca-97be-442a-b010-113376afd602"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:node",
          "target": "rsc:serviceaccounts/token",
          "name": "create",
          "color": "#4b1991",
          "id": "556ac011-bd1a-43a7-8e80-0b0036c9f0fd"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:node",
          "target": "rsc:persistentvolumeclaims/status",
          "name": "get,patch,update",
          "color": "#4b1991",
          "id": "efe8be49-5bdf-4d3f-a0d8-7f538cc6d1e4"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:node",
          "target": "rsc:csidrivers",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "2c5117e8-9443-4272-9c0b-53cabc5443f2"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:node",
          "target": "rsc:csinodes",
          "name": "create,delete,get,patch,update",
          "color": "#4b1991",
          "id": "5b48dba5-f9bd-49e9-8665-73541253e010"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:node",
          "target": "rsc:runtimeclasses",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "289dde1e-8cb8-4ffc-8ea1-f656d9cedabd"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:node-bootstrapper",
          "target": "rsc:certificatesigningrequests",
          "name": "create,get,list,watch",
          "color": "#4b1991",
          "id": "e5f79770-2749-429b-bd67-24d3889ffa34"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:node-problem-detector",
          "target": "rsc:nodes",
          "name": "get",
          "color": "#4b1991",
          "id": "e89e3718-dee0-4156-b7bc-fe2bb6a6053b"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:node-problem-detector",
          "target": "rsc:nodes/status",
          "name": "patch",
          "color": "#4b1991",
          "id": "1b0245e0-8540-4e7e-af8b-7f7671311eba"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:node-problem-detector",
          "target": "rsc:events",
          "name": "create,patch,update",
          "color": "#4b1991",
          "id": "37ddd810-8f26-464f-9dd3-77dd1d8d525c"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:node-proxier",
          "target": "rsc:endpoints",
          "name": "list,watch",
          "color": "#4b1991",
          "id": "f4ba9ae2-61a5-49ae-a4a6-f64e1a9434ec"
        },
        "position": {
          "x": null,
          "y": null
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:node-proxier",
          "target": "rsc:services",
          "name": "list,watch",
          "color": "#4b1991",
          "id": "ced4951c-acad-41fe-87b7-b46967fc7985"
        },
        "position": {
          "x": null,
          "y": null
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:node-proxier",
          "target": "rsc:nodes",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "47ee305d-7358-4f0f-a642-bdccda6c2c3d"
        },
        "position": {
          "x": null,
          "y": null
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:node-proxier",
          "target": "rsc:events",
          "name": "create,patch,update",
          "color": "#4b1991",
          "id": "bcf0368e-d357-467b-b537-bf0a9e25f81d"
        },
        "position": {
          "x": null,
          "y": null
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:node-proxier",
          "target": "rsc:endpointslices",
          "name": "list,watch",
          "color": "#4b1991",
          "id": "5cbd093c-8f7a-4de2-8564-b57311d275df"
        },
        "position": {
          "x": null,
          "y": null
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:persistent-volume-provisioner",
          "target": "rsc:persistentvolumes",
          "name": "create,delete,get,list,watch",
          "color": "#4b1991",
          "id": "0632f634-0886-45cb-89ba-d7ecec57153c"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:persistent-volume-provisioner",
          "target": "rsc:persistentvolumeclaims",
          "name": "get,list,update,watch",
          "color": "#4b1991",
          "id": "d15567f4-dbcf-44d2-bb22-ae3a7bd18fb0"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:persistent-volume-provisioner",
          "target": "rsc:storageclasses",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "b4bca098-2b2e-4141-8e4c-c23f358af467"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:persistent-volume-provisioner",
          "target": "rsc:events",
          "name": "watch",
          "color": "#4b1991",
          "id": "42f60624-9808-42ae-a3fb-21c2aeb32f9c"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:persistent-volume-provisioner",
          "target": "rsc:events",
          "name": "create,patch,update",
          "color": "#4b1991",
          "id": "01343108-7a99-45ae-99b3-66901e808f93"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:volume-scheduler",
          "target": "rsc:persistentvolumes",
          "name": "get,list,patch,update,watch",
          "color": "#4b1991",
          "id": "3d409c71-6697-4250-a1b2-ef434ac5dee7"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:volume-scheduler",
          "target": "rsc:storageclasses",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "1f1f3f99-a681-41f5-94c8-c422b9bd1522"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:system:volume-scheduler",
          "target": "rsc:persistentvolumeclaims",
          "name": "get,list,patch,update,watch",
          "color": "#4b1991",
          "id": "07b0336e-343c-4404-9701-d0fa86f5a91f"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:configmaps",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "4aa4778e-21c7-4876-90fc-44a9fed5e599"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:endpoints",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "57996c7f-787e-4853-b751-2442788bd516"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:persistentvolumeclaims",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "f5463f07-96e0-4f01-99a9-4d77b3c1f09f"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:persistentvolumeclaims/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "a9c07171-a7dc-4889-a85f-c7545e8b1541"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:pods",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "1ac4d3b2-95e6-4a90-9440-7c039b7ce83e"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:replicationcontrollers",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "28a8b8fd-bff4-42cc-9c01-0c87f074b0a7"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:replicationcontrollers/scale",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "e012ec45-4836-4358-a988-96e1925f3db4"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:serviceaccounts",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "d8281e1f-1b14-44ab-87dc-801e7a1967e0"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:services",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "ab94699a-4aa3-41e8-bc49-1e9ecc7d6085"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:services/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "183e2d32-5417-42e3-bdc2-4dff8366cac4"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:bindings",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "146e4030-0a40-426b-853c-7cb5bb3f40ce"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:events",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "378a21e4-e69f-4def-8eb8-bb1037ae5690"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:limitranges",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "736ceaa3-afa1-4706-8ca4-9f7f2b9769a6"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:namespaces/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "acaf5806-acd4-4ce6-b094-93e8c0d5a90c"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:pods/log",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "ce1da973-18ec-4314-a7a0-1e85b03c8453"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:pods/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "13954e77-7ee7-4f65-b90b-b25bc29b7106"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:replicationcontrollers/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "0051ee93-be24-44d5-8773-72361f757510"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:resourcequotas",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "7c99c40f-86e9-499b-8700-2d101d8df88b"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:resourcequotas/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "aa5ddf09-e9e5-4894-a11c-e0bc1aff21bd"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:namespaces",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "74fa9149-c7bd-4558-ac2c-521be08451b0"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:controllerrevisions",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "f248bf8c-9103-4cc7-b063-d7e35a6aa17f"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:daemonsets",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "975b7d5e-e1cc-4e3c-bf02-1e2f5cdb8b77"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:daemonsets/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "84654888-44ed-4f95-84c0-c39034430846"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:deployments",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "6fe74881-2e9d-427f-910c-0b3ec5655140"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:deployments/scale",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "5160d420-59dd-469d-8c2c-41d5c05154d9"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:deployments/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "ba602e8a-a9a0-4089-882c-32915c326f8f"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:replicasets",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "8d93ec5e-53aa-4835-ad3e-39047e1ec1f1"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:replicasets/scale",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "1dc08105-d094-44ca-945c-a2ac6d3f1fba"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:replicasets/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "797d6881-307e-4276-be49-00b49a1e77e5"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:statefulsets",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "c9f1ef98-e81e-43ec-a6d7-fe87f56f7359"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:statefulsets/scale",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "b0d76010-73f4-4856-968e-ce8abd8d52cd"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:statefulsets/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "e3c60b6b-481f-4541-b34b-4a259638f033"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:horizontalpodautoscalers",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "d0f9415c-745a-4064-9da6-b2e23e9b5a2a"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:horizontalpodautoscalers/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "6460e92f-5dc8-461e-8302-097b691dfe9f"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:cronjobs",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "063568b0-0467-4b08-bcbd-3e38ce0968f8"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:cronjobs/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "d9e41451-7673-4521-a51c-05f3fea64830"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:jobs",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "163be98d-c860-478b-a3b3-1882ed7e54e3"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:jobs/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "188fe9b4-9153-4a4f-9a0d-21f2b977d83a"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:daemonsets",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "14606e30-22fc-40fb-9e4b-8014eba0730e"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:daemonsets/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "fe094bb9-5e79-4af0-9600-1623d08b6dd9"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:deployments",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "87b4f4e5-6807-4bfe-9a12-f634ca675a20"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:deployments/scale",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "909685e7-9cfd-42cb-b7c0-921bb320e41b"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:deployments/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "1748a34d-757c-47c5-a2f5-1ec6b046813d"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:ingresses",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "516113e0-1a6a-461c-9771-4e52374738b5"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:ingresses/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "1e290920-2efc-47ee-a3c9-19b3a82f84df"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:networkpolicies",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "75421c7f-07be-47b7-ac35-671d4535768c"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:replicasets",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "774b295e-1078-4c18-b786-f156a47f8487"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:replicasets/scale",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "a8186130-8672-4c34-a1c1-0ad7db4acdb7"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:replicasets/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "90dadbde-7f88-4ced-92d1-76c70b66ffe0"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:replicationcontrollers/scale",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "5a63e796-b528-48c3-8617-43b6105326e1"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:poddisruptionbudgets",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "f428df01-fe34-4c37-9c01-17d2ddf2621e"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:poddisruptionbudgets/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "1587c673-4d03-4a8b-b6f9-af38a14ac625"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:ingresses",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "51ba8e0c-29e8-4c88-bc47-17403c43f616"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:ingresses/status",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "2aa9df1d-c6d6-463a-a24e-f6d119fd1fbc"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "cr:view",
          "target": "rsc:networkpolicies",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "dd52a784-fe62-42f6-82f6-8bd15fed2e51"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "s:ca-controller-service-account",
          "target": "cr:ca-controller-roles",
          "name": "ca-controller-role-binding",
          "color": "#00ffff",
          "id": "a49d1c06-aaae-4a4e-a44b-ae3810c2cd7f"
        },
        "position": {
          "x": null,
          "y": null
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:system:masters",
          "target": "cr:cluster-admin",
          "name": "cluster-admin",
          "color": "#00ffff",
          "id": "a9ac0ce8-c261-4c72-a7fe-cb68ca72ed5c"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:system:bootstrappers:kubeadm:default-node-token",
          "target": "cr:kubeadm:get-nodes",
          "name": "kubeadm:get-nodes",
          "color": "#00ffff",
          "id": "bd50bbdc-f948-4eaf-936e-331c7b7c3ab8"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:system:bootstrappers:kubeadm:default-node-token",
          "target": "cr:system:node-bootstrapper",
          "name": "kubeadm:kubelet-bootstrap",
          "color": "#00ffff",
          "id": "dd7b4e5d-89c6-4fb8-b55e-ecfcda790604"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:system:bootstrappers:kubeadm:default-node-token",
          "target": "cr:system:certificates.k8s.io:certificatesigningrequests:nodeclient",
          "name": "kubeadm:node-autoapprove-bootstrap",
          "color": "#00ffff",
          "id": "916c3e23-170b-495e-901d-969c21c48e3d"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:system:nodes",
          "target": "cr:system:certificates.k8s.io:certificatesigningrequests:selfnodeclient",
          "name": "kubeadm:node-autoapprove-certificate-rotation",
          "color": "#00ffff",
          "id": "4bca779e-fdd1-4f81-b52f-69d81612d802"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:kube-proxy",
          "target": "cr:system:node-proxier",
          "name": "kubeadm:node-proxier",
          "color": "#00ffff",
          "id": "9d2625b6-e040-4ad3-a4a5-fd20454a399a"
        },
        "position": {
          "x": null,
          "y": null
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:default",
          "target": "cr:cluster-admin",
          "name": "minikube-rbac",
          "color": "#00ffff",
          "id": "e210f13c-db89-40c3-954d-69d7475c0809"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:storage-provisioner",
          "target": "cr:system:persistent-volume-provisioner",
          "name": "storage-provisioner",
          "color": "#00ffff",
          "id": "6c8054e6-3b73-4b60-8256-b025f46bbc0f"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:system:authenticated",
          "target": "cr:system:basic-user",
          "name": "system:basic-user",
          "color": "#00ffff",
          "id": "bc5e68a7-0731-4c35-ad5f-3878acec59c9"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:attachdetach-controller",
          "target": "cr:system:controller:attachdetach-controller",
          "name": "system:controller:attachdetach-controller",
          "color": "#00ffff",
          "id": "95473945-f40c-475d-9e23-32fbdd85627a"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:certificate-controller",
          "target": "cr:system:controller:certificate-controller",
          "name": "system:controller:certificate-controller",
          "color": "#00ffff",
          "id": "48019ec1-4c88-44f2-a92c-d641296e35ec"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:clusterrole-aggregation-controller",
          "target": "cr:system:controller:clusterrole-aggregation-controller",
          "name": "system:controller:clusterrole-aggregation-controller",
          "color": "#00ffff",
          "id": "e6aa23cd-3103-4934-a592-576e18a45cfc"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:cronjob-controller",
          "target": "cr:system:controller:cronjob-controller",
          "name": "system:controller:cronjob-controller",
          "color": "#00ffff",
          "id": "5dcd28a3-616b-4b7c-9c96-7439f7b369f6"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:daemon-set-controller",
          "target": "cr:system:controller:daemon-set-controller",
          "name": "system:controller:daemon-set-controller",
          "color": "#00ffff",
          "id": "b62500cd-21be-445b-8816-d0cbe832fcd7"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:deployment-controller",
          "target": "cr:system:controller:deployment-controller",
          "name": "system:controller:deployment-controller",
          "color": "#00ffff",
          "id": "064be8c2-3e80-4e42-82d8-a2c966507ba7"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:disruption-controller",
          "target": "cr:system:controller:disruption-controller",
          "name": "system:controller:disruption-controller",
          "color": "#00ffff",
          "id": "3213635f-1b1d-402d-9985-ca32cd0032e9"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:endpoint-controller",
          "target": "cr:system:controller:endpoint-controller",
          "name": "system:controller:endpoint-controller",
          "color": "#00ffff",
          "id": "7a35dcae-069a-486c-83bb-89d6c5123771"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:endpointslice-controller",
          "target": "cr:system:controller:endpointslice-controller",
          "name": "system:controller:endpointslice-controller",
          "color": "#00ffff",
          "id": "08ab0c65-b247-4882-95fb-01690f68ef8a"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:endpointslicemirroring-controller",
          "target": "cr:system:controller:endpointslicemirroring-controller",
          "name": "system:controller:endpointslicemirroring-controller",
          "color": "#00ffff",
          "id": "79fd235e-1b5e-49b6-9a10-5c2658bb0379"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:expand-controller",
          "target": "cr:system:controller:expand-controller",
          "name": "system:controller:expand-controller",
          "color": "#00ffff",
          "id": "c0f99bf2-e72c-4ebd-8a04-f2043690a8f7"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:generic-garbage-collector",
          "target": "cr:system:controller:generic-garbage-collector",
          "name": "system:controller:generic-garbage-collector",
          "color": "#00ffff",
          "id": "c5e34706-60c6-4e32-9328-8e280b131bd0"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:horizontal-pod-autoscaler",
          "target": "cr:system:controller:horizontal-pod-autoscaler",
          "name": "system:controller:horizontal-pod-autoscaler",
          "color": "#00ffff",
          "id": "a2266b0a-9d6b-4be2-a622-42c2bbaf1f15"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:job-controller",
          "target": "cr:system:controller:job-controller",
          "name": "system:controller:job-controller",
          "color": "#00ffff",
          "id": "750072b4-55f2-451e-9812-b21f1b95e02a"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:namespace-controller",
          "target": "cr:system:controller:namespace-controller",
          "name": "system:controller:namespace-controller",
          "color": "#00ffff",
          "id": "a24c824f-b948-498d-a32d-6a96e7d24f49"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:node-controller",
          "target": "cr:system:controller:node-controller",
          "name": "system:controller:node-controller",
          "color": "#00ffff",
          "id": "103cf9e5-21c1-4352-9976-86536db4a465"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:persistent-volume-binder",
          "target": "cr:system:controller:persistent-volume-binder",
          "name": "system:controller:persistent-volume-binder",
          "color": "#00ffff",
          "id": "acd6cb8a-3c00-4808-b0cd-9bef60f388cf"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:pod-garbage-collector",
          "target": "cr:system:controller:pod-garbage-collector",
          "name": "system:controller:pod-garbage-collector",
          "color": "#00ffff",
          "id": "9c4c4fac-8bcf-4d19-b20f-bf40f8156fd9"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:pv-protection-controller",
          "target": "cr:system:controller:pv-protection-controller",
          "name": "system:controller:pv-protection-controller",
          "color": "#00ffff",
          "id": "9b436e31-1c41-4e57-ad27-ea6bc618dd3c"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:pvc-protection-controller",
          "target": "cr:system:controller:pvc-protection-controller",
          "name": "system:controller:pvc-protection-controller",
          "color": "#00ffff",
          "id": "26cc7d00-7f02-44ad-9246-f3a44ee6dc74"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:replicaset-controller",
          "target": "cr:system:controller:replicaset-controller",
          "name": "system:controller:replicaset-controller",
          "color": "#00ffff",
          "id": "40a7d5d2-88ca-4bda-ad05-fbb239764e9e"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:replication-controller",
          "target": "cr:system:controller:replication-controller",
          "name": "system:controller:replication-controller",
          "color": "#00ffff",
          "id": "235ca1d4-c0cd-46bd-aa9c-095781f0d02b"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:resourcequota-controller",
          "target": "cr:system:controller:resourcequota-controller",
          "name": "system:controller:resourcequota-controller",
          "color": "#00ffff",
          "id": "f3b9bbaa-b8e3-4b9a-8ba0-61ab10697868"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:root-ca-cert-publisher",
          "target": "cr:system:controller:root-ca-cert-publisher",
          "name": "system:controller:root-ca-cert-publisher",
          "color": "#00ffff",
          "id": "c920c455-9a5c-42f2-959e-413c52663482"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:route-controller",
          "target": "cr:system:controller:route-controller",
          "name": "system:controller:route-controller",
          "color": "#00ffff",
          "id": "f4192c39-9536-4ea6-88e8-82402f75aea6"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:service-account-controller",
          "target": "cr:system:controller:service-account-controller",
          "name": "system:controller:service-account-controller",
          "color": "#00ffff",
          "id": "109df339-7885-47aa-8d1a-edd29518defd"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:service-controller",
          "target": "cr:system:controller:service-controller",
          "name": "system:controller:service-controller",
          "color": "#00ffff",
          "id": "d9db45d2-2ca0-49b4-9a2f-014b3d9406db"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:statefulset-controller",
          "target": "cr:system:controller:statefulset-controller",
          "name": "system:controller:statefulset-controller",
          "color": "#00ffff",
          "id": "e233412c-09fd-4d4a-b998-294896c180d9"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:ttl-controller",
          "target": "cr:system:controller:ttl-controller",
          "name": "system:controller:ttl-controller",
          "color": "#00ffff",
          "id": "b2adfdb5-834a-43f1-ab6e-2d4c38e0f63e"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:coredns",
          "target": "cr:system:coredns",
          "name": "system:coredns",
          "color": "#00ffff",
          "id": "be18bd71-1477-4802-93c0-8b5039ec1451"
        },
        "position": {
          "x": null,
          "y": null
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:system:authenticated",
          "target": "cr:system:discovery",
          "name": "system:discovery",
          "color": "#00ffff",
          "id": "3fdbc461-ac22-4bf9-8169-6027fc3f575c"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:system:kube-controller-manager",
          "target": "cr:system:kube-controller-manager",
          "name": "system:kube-controller-manager",
          "color": "#00ffff",
          "id": "6478e002-a706-4275-960f-b3fb4e213891"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:kube-dns",
          "target": "cr:system:kube-dns",
          "name": "system:kube-dns",
          "color": "#00ffff",
          "id": "95f5b924-0aa7-4e73-84c4-6f60fa6e75d4"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:system:kube-scheduler",
          "target": "cr:system:kube-scheduler",
          "name": "system:kube-scheduler",
          "color": "#00ffff",
          "id": "ab19df76-d94c-4542-ba5e-d1d01d3e8d84"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:system:monitoring",
          "target": "cr:system:monitoring",
          "name": "system:monitoring",
          "color": "#00ffff",
          "id": "f5a39136-8661-4465-8e86-9e3ffbd5a03e"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:system:kube-proxy",
          "target": "cr:system:node-proxier",
          "name": "system:node-proxier",
          "color": "#00ffff",
          "id": "4ce50b1e-1212-4fa7-b2a9-e85d68d73b68"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:system:authenticated",
          "target": "cr:system:public-info-viewer",
          "name": "system:public-info-viewer",
          "color": "#00ffff",
          "id": "279c57e6-37a0-4ace-b675-2ee7636dc874"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:system:unauthenticated",
          "target": "cr:system:public-info-viewer",
          "name": "system:public-info-viewer",
          "color": "#00ffff",
          "id": "39cfe23e-9b5c-4676-83e1-3ca3aafb3ad1"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:system:serviceaccounts",
          "target": "cr:system:service-account-issuer-discovery",
          "name": "system:service-account-issuer-discovery",
          "color": "#00ffff",
          "id": "dccd3361-98c9-400d-bba7-f7df4aa06961"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "s:system:kube-scheduler",
          "target": "cr:system:volume-scheduler",
          "name": "system:volume-scheduler",
          "color": "#00ffff",
          "id": "4719a3eb-da9e-43c6-a815-372a12d3142a"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "clusterRoleBinding"
      },
      {
        "data": {
          "source": "r:kubeadm:bootstrap-signer-clusterinfo",
          "target": "rsc:configmaps",
          "name": "get",
          "color": "#4b1991",
          "id": "5f2523e1-ca3f-416b-a365-b47a2688a50c"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "r:system:controller:bootstrap-signer",
          "target": "rsc:configmaps",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "6e1ac68f-0463-4edd-9bf1-4a4e2431dd6b"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "r:system:controller:bootstrap-signer",
          "target": "rsc:configmaps",
          "name": "update",
          "color": "#4b1991",
          "id": "9ffe441b-2054-40f9-8a53-1c2f06a27e96"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "r:system:controller:bootstrap-signer",
          "target": "rsc:events",
          "name": "create,patch,update",
          "color": "#4b1991",
          "id": "aa712206-b76e-4c6a-b779-2c6d7239b4d7"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "r:extension-apiserver-authentication-reader",
          "target": "rsc:configmaps",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "cdfc5fec-d0fe-451a-82ab-350cb1be352b"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "r:kube-proxy",
          "target": "rsc:configmaps",
          "name": "get",
          "color": "#4b1991",
          "id": "54f98c0c-76e0-4c60-adb3-b5ae688d507e"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "r:kubeadm:kubelet-config-1.20",
          "target": "rsc:configmaps",
          "name": "get",
          "color": "#4b1991",
          "id": "ae44c3af-5d31-4888-88ea-a2c8f33e5881"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "r:kubeadm:nodes-kubeadm-config",
          "target": "rsc:configmaps",
          "name": "get",
          "color": "#4b1991",
          "id": "d1199fce-1664-4135-8972-2584c263f04e"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "r:system::leader-locking-kube-controller-manager",
          "target": "rsc:configmaps",
          "name": "watch",
          "color": "#4b1991",
          "id": "b2c300ee-d102-411e-a8d1-cb5cc08ad68d"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "r:system::leader-locking-kube-controller-manager",
          "target": "rsc:configmaps",
          "name": "get,update",
          "color": "#4b1991",
          "id": "f36fd43b-19f6-455f-9eac-b837beac1a5a"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "r:system::leader-locking-kube-scheduler",
          "target": "rsc:configmaps",
          "name": "watch",
          "color": "#4b1991",
          "id": "5507de6d-855e-4be5-8c70-8a9e50681f3d"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "r:system::leader-locking-kube-scheduler",
          "target": "rsc:configmaps",
          "name": "get,update",
          "color": "#4b1991",
          "id": "d1a24f71-daca-47b6-be23-db275d9db3b8"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "r:system:controller:bootstrap-signer",
          "target": "rsc:secrets",
          "name": "get,list,watch",
          "color": "#4b1991",
          "id": "e00fe038-ebf4-4820-ac0c-ba6c3968d107"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "r:system:controller:cloud-provider",
          "target": "rsc:configmaps",
          "name": "create,get,list,watch",
          "color": "#4b1991",
          "id": "bbef1d5e-85be-423e-a557-a0926338d36d"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "r:system:controller:token-cleaner",
          "target": "rsc:secrets",
          "name": "delete,get,list,watch",
          "color": "#4b1991",
          "id": "612a2607-bc26-4617-9c97-5eef3c99c740"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "r:system:controller:token-cleaner",
          "target": "rsc:events",
          "name": "create,patch,update",
          "color": "#4b1991",
          "id": "73c40ee6-ba74-4cec-b809-d1d51aa8a5e2"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "r:system:persistent-volume-provisioner",
          "target": "rsc:endpoints",
          "name": "create,watch",
          "color": "#4b1991",
          "id": "3b6ba1a4-720a-4f75-be4a-7eb63f19f64e"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "r:system:persistent-volume-provisioner",
          "target": "rsc:endpoints",
          "name": "create,get,update",
          "color": "#4b1991",
          "id": "deea4904-2f86-4ef0-8f6f-43c3a2b9d376"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "verbs"
      },
      {
        "data": {
          "source": "s:system:anonymous",
          "target": "r:kubeadm:bootstrap-signer-clusterinfo",
          "name": "kubeadm:bootstrap-signer-clusterinfo",
          "color": "#00ffff",
          "id": "308b9e47-561d-4b04-9e19-9aeee16d6964"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "roleBinding"
      },
      {
        "data": {
          "source": "s:bootstrap-signer",
          "target": "r:system:controller:bootstrap-signer",
          "name": "system:controller:bootstrap-signer",
          "color": "#00ffff",
          "id": "e0ecd331-a8ef-4ae4-ad17-04d6d5a5f7e9"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "roleBinding"
      },
      {
        "data": {
          "source": "s:system:bootstrappers:kubeadm:default-node-token",
          "target": "r:kube-proxy",
          "name": "kube-proxy",
          "color": "#00ffff",
          "id": "db77dd1e-c1ee-4982-91d9-fb6bb1a5445a"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "roleBinding"
      },
      {
        "data": {
          "source": "s:system:nodes",
          "target": "r:kubeadm:kubelet-config-1.20",
          "name": "kubeadm:kubelet-config-1.20",
          "color": "#00ffff",
          "id": "f8828b97-9059-46be-9745-6241c12fae5b"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "roleBinding"
      },
      {
        "data": {
          "source": "s:system:bootstrappers:kubeadm:default-node-token",
          "target": "r:kubeadm:kubelet-config-1.20",
          "name": "kubeadm:kubelet-config-1.20",
          "color": "#00ffff",
          "id": "5264c83a-611b-4ca8-8a2a-8d567264ab02"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "roleBinding"
      },
      {
        "data": {
          "source": "s:system:bootstrappers:kubeadm:default-node-token",
          "target": "r:kubeadm:nodes-kubeadm-config",
          "name": "kubeadm:nodes-kubeadm-config",
          "color": "#00ffff",
          "id": "85c8b0b2-d047-4c0c-a36f-1ad3ea00564f"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "roleBinding"
      },
      {
        "data": {
          "source": "s:system:nodes",
          "target": "r:kubeadm:nodes-kubeadm-config",
          "name": "kubeadm:nodes-kubeadm-config",
          "color": "#00ffff",
          "id": "6657cd87-0741-41e6-9a80-4e2ee514d62d"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "roleBinding"
      },
      {
        "data": {
          "source": "s:system:kube-controller-manager",
          "target": "r:extension-apiserver-authentication-reader",
          "name": "system::extension-apiserver-authentication-reader",
          "color": "#00ffff",
          "id": "5d296459-b4db-4def-9327-826b190196b4"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "roleBinding"
      },
      {
        "data": {
          "source": "s:system:kube-scheduler",
          "target": "r:extension-apiserver-authentication-reader",
          "name": "system::extension-apiserver-authentication-reader",
          "color": "#00ffff",
          "id": "56d434a6-4019-41b4-9d3d-47fd81f6f484"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "roleBinding"
      },
      {
        "data": {
          "source": "s:system:kube-controller-manager",
          "target": "r:system::leader-locking-kube-controller-manager",
          "name": "system::leader-locking-kube-controller-manager",
          "color": "#00ffff",
          "id": "1d0ad485-5ea2-4538-a538-14975bfb90fa"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "roleBinding"
      },
      {
        "data": {
          "source": "s:kube-controller-manager",
          "target": "r:system::leader-locking-kube-controller-manager",
          "name": "system::leader-locking-kube-controller-manager",
          "color": "#00ffff",
          "id": "f7eddba4-509b-4d9e-bbfd-1e2a3bb212f4"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "roleBinding"
      },
      {
        "data": {
          "source": "s:system:kube-scheduler",
          "target": "r:system::leader-locking-kube-scheduler",
          "name": "system::leader-locking-kube-scheduler",
          "color": "#00ffff",
          "id": "2dc4d031-c59b-42ee-8d80-4cc2ae7c2f74"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "roleBinding"
      },
      {
        "data": {
          "source": "s:kube-scheduler",
          "target": "r:system::leader-locking-kube-scheduler",
          "name": "system::leader-locking-kube-scheduler",
          "color": "#00ffff",
          "id": "9a1a4fd9-6942-48c7-8505-4a790b7bcd32"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "roleBinding"
      },
      {
        "data": {
          "source": "s:bootstrap-signer",
          "target": "r:system:controller:bootstrap-signer",
          "name": "system:controller:bootstrap-signer",
          "color": "#00ffff",
          "id": "0c475e94-479b-482c-b69f-b472751e7d0e"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "roleBinding"
      },
      {
        "data": {
          "source": "s:cloud-provider",
          "target": "r:system:controller:cloud-provider",
          "name": "system:controller:cloud-provider",
          "color": "#00ffff",
          "id": "b6a90d09-fe2b-438b-8dd5-9127aa8ce325"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "roleBinding"
      },
      {
        "data": {
          "source": "s:token-cleaner",
          "target": "r:system:controller:token-cleaner",
          "name": "system:controller:token-cleaner",
          "color": "#00ffff",
          "id": "631473b1-5276-42fb-9187-060c8c4183e9"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "roleBinding"
      },
      {
        "data": {
          "source": "s:storage-provisioner",
          "target": "r:system:persistent-volume-provisioner",
          "name": "system:persistent-volume-provisioner",
          "color": "#00ffff",
          "id": "377049bb-75a9-4f3e-8da7-ecb3a69ea466"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": "roleBinding"
      },
      {
        "data": {
          "source": "wlid://cluster-haganenorenkinjitsu/namespace-cyberarmor-system/deployment-ca-posture",
          "target": "s:ca-controller-service-account",
          "name": "",
          "color": "#00ffff",
          "id": "fc80acbc-6fe2-47b3-af24-293f73a65d6c"
        },
        "position": {
          "x": null,
          "y": null
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": ""
      },
      {
        "data": {
          "source": "wlid://cluster-haganenorenkinjitsu/namespace-cyberarmor-system/deployment-ca-ocimage",
          "target": "s:ca-controller-service-account",
          "name": "",
          "color": "#00ffff",
          "id": "57dd7b15-fbdb-4823-bdc3-d4cfaa90ce2b"
        },
        "position": {
          "x": null,
          "y": null
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": ""
      },
      {
        "data": {
          "source": "wlid://cluster-haganenorenkinjitsu/namespace-cyberarmor-system/deployment-ca-rbac",
          "target": "s:ca-controller-service-account",
          "name": "",
          "color": "#00ffff",
          "id": "dd56d915-4e9a-49cd-9b7b-5b35bee362ec"
        },
        "position": {
          "x": null,
          "y": null
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": ""
      },
      {
        "data": {
          "source": "wlid://cluster-haganenorenkinjitsu/namespace-cyberarmor-system/deployment-ca-dashboard-aggregator",
          "target": "s:ca-controller-service-account",
          "name": "",
          "color": "#00ffff",
          "id": "529216a9-98fa-480e-a563-5a2650449df8"
        },
        "position": {
          "x": null,
          "y": null
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": ""
      },
      {
        "data": {
          "source": "wlid://cluster-haganenorenkinjitsu/namespace-cyberarmor-system/deployment-ca-vuln-scan",
          "target": "s:ca-controller-service-account",
          "name": "",
          "color": "#00ffff",
          "id": "1995945d-39cf-4936-a2cd-085d8c3473ff"
        },
        "position": {
          "x": null,
          "y": null
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": ""
      },
      {
        "data": {
          "source": "wlid://cluster-haganenorenkinjitsu/namespace-cyberarmor-system/deployment-ca-websocket",
          "target": "s:ca-controller-service-account",
          "name": "",
          "color": "#00ffff",
          "id": "e3c0c12e-86a2-48e9-b8ec-8147f532377b"
        },
        "position": {
          "x": null,
          "y": null
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": ""
      },
      {
        "data": {
          "source": "wlid://cluster-haganenorenkinjitsu/namespace-cyberarmor-system/deployment-ca-oracle",
          "target": "s:ca-controller-service-account",
          "name": "",
          "color": "#00ffff",
          "id": "266f0922-55a0-41b1-aaa3-7dbd840f1aab"
        },
        "position": {
          "x": null,
          "y": null
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": ""
      },
      {
        "data": {
          "source": "wlid://cluster-haganenorenkinjitsu/namespace-kube-system/deployment-coredns",
          "target": "s:coredns",
          "name": "",
          "color": "#00ffff",
          "id": "087f3aff-dd83-4e1b-a7de-fd14c478e3a6"
        },
        "position": {
          "x": null,
          "y": null
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": ""
      },
      {
        "data": {
          "source": "wlid://cluster-haganenorenkinjitsu/namespace-kube-system/daemonset-kube-proxy",
          "target": "s:kube-proxy",
          "name": "",
          "color": "#00ffff",
          "id": "94aee870-e542-466b-9fec-44f7231353dd"
        },
        "position": {
          "x": null,
          "y": null
        },
        "group": "edges",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true,
        "pannable": true,
        "classes": ""
      }
    ]
  }

  const shownElems = [
    {
      "data": {
        "name": "ca-controller-roles",
        "id": "cr:ca-controller-roles"
      },
      "position": {
        "x": 28.00903642036485,
        "y": -360.0440952778057
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": "clusterRole"
    },
    {
      "data": {
        "name": "system:coredns",
        "id": "cr:system:coredns"
      },
      "position": {
        "x": -417.9106153442107,
        "y": 55.91302502718037
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": "clusterRole"
    },
    {
      "data": {
        "name": "system:node-proxier",
        "id": "cr:system:node-proxier"
      },
      "position": {
        "x": -456.9076148735826,
        "y": 307.20311375569815
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": "clusterRole"
    },
    {
      "data": {
        "name": "pods",
        "id": "rsc:pods"
      },
      "position": {
        "x": -329.4634710196916,
        "y": -64.91798195824123
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": "resource"
    },
    {
      "data": {
        "name": "endpoints",
        "id": "rsc:endpoints"
      },
      "position": {
        "x": -345.2391033193474,
        "y": 191.39107799615562
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": "resource"
    },
    {
      "data": {
        "name": "services",
        "id": "rsc:services"
      },
      "position": {
        "x": -443.38653521238035,
        "y": 180.9212797989042
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": "resource"
    },
    {
      "data": {
        "name": "events",
        "id": "rsc:events"
      },
      "position": {
        "x": -421.68600657816734,
        "y": 445.5675362081862
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": "resource"
    },
    {
      "data": {
        "name": "namespaces",
        "id": "rsc:namespaces"
      },
      "position": {
        "x": -454.3234097498809,
        "y": -82.40545938288437
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": "resource"
    },
    {
      "data": {
        "name": "*",
        "id": "rsc:*"
      },
      "position": {
        "x": -35.06793773264309,
        "y": -490.0675362081862
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": "resource"
    },
    {
      "data": {
        "name": "nodes",
        "id": "rsc:nodes"
      },
      "position": {
        "x": -541.964373763187,
        "y": 172.4464922063674
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": "resource"
    },
    {
      "data": {
        "name": "endpointslices",
        "id": "rsc:endpointslices"
      },
      "position": {
        "x": -581.567937732643,
        "y": 418.69243191475204
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": "resource"
    },
    {
      "data": {
        "source": "cr:ca-controller-roles",
        "target": "rsc:*",
        "name": "*",
        "color": "#4b1991",
        "id": "7807c4b3-4a21-414c-8377-357475b27cc0"
      },
      "position": {
        "x": null,
        "y": null
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": "verbs"
    },
    {
      "data": {
        "source": "cr:system:coredns",
        "target": "rsc:endpoints",
        "name": "list,watch",
        "color": "#4b1991",
        "id": "983cd6bd-560f-42c9-a0b0-a1225377b05e"
      },
      "position": {
        "x": null,
        "y": null
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": "verbs"
    },
    {
      "data": {
        "source": "cr:system:coredns",
        "target": "rsc:services",
        "name": "list,watch",
        "color": "#4b1991",
        "id": "9d4a2865-24b9-4628-86ea-e419f6f73168"
      },
      "position": {
        "x": null,
        "y": null
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": "verbs"
    },
    {
      "data": {
        "source": "cr:system:coredns",
        "target": "rsc:pods",
        "name": "list,watch",
        "color": "#4b1991",
        "id": "d63a0d70-bfb0-44f2-a90a-7a3758d0e0b1"
      },
      "position": {
        "x": null,
        "y": null
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": "verbs"
    },
    {
      "data": {
        "source": "cr:system:coredns",
        "target": "rsc:namespaces",
        "name": "list,watch",
        "color": "#4b1991",
        "id": "f2df90f6-3961-4646-a317-9dc9447cc5bb"
      },
      "position": {
        "x": null,
        "y": null
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": "verbs"
    },
    {
      "data": {
        "source": "cr:system:coredns",
        "target": "rsc:nodes",
        "name": "get",
        "color": "#4b1991",
        "id": "281ecb59-900b-4d58-898e-1f8cc8351a32"
      },
      "position": {
        "x": null,
        "y": null
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": "verbs"
    },
    {
      "data": {
        "source": "cr:system:node-proxier",
        "target": "rsc:endpoints",
        "name": "list,watch",
        "color": "#4b1991",
        "id": "f4ba9ae2-61a5-49ae-a4a6-f64e1a9434ec"
      },
      "position": {
        "x": null,
        "y": null
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": "verbs"
    },
    {
      "data": {
        "source": "cr:system:node-proxier",
        "target": "rsc:services",
        "name": "list,watch",
        "color": "#4b1991",
        "id": "ced4951c-acad-41fe-87b7-b46967fc7985"
      },
      "position": {
        "x": null,
        "y": null
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": "verbs"
    },
    {
      "data": {
        "source": "cr:system:node-proxier",
        "target": "rsc:nodes",
        "name": "get,list,watch",
        "color": "#4b1991",
        "id": "47ee305d-7358-4f0f-a642-bdccda6c2c3d"
      },
      "position": {
        "x": null,
        "y": null
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": "verbs"
    },
    {
      "data": {
        "source": "cr:system:node-proxier",
        "target": "rsc:events",
        "name": "create,patch,update",
        "color": "#4b1991",
        "id": "bcf0368e-d357-467b-b537-bf0a9e25f81d"
      },
      "position": {
        "x": null,
        "y": null
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": "verbs"
    },
    {
      "data": {
        "source": "cr:system:node-proxier",
        "target": "rsc:endpointslices",
        "name": "list,watch",
        "color": "#4b1991",
        "id": "5cbd093c-8f7a-4de2-8564-b57311d275df"
      },
      "position": {
        "x": null,
        "y": null
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": "verbs"
    },
    {
      "data": {
        "id": "ns-cyberarmor-system",
        "name": "ns:cyberarmor-system",
        "kind": "namespace"
      },
      "position": {
        "x": 473.8237348033866,
        "y": -209.32071488066265
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "id": "ns-kube-system",
        "name": "ns:kube-system",
        "kind": "namespace"
      },
      "position": {
        "x": -125.67769960363566,
        "y": 65.18719919821905
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "id": "s:ca-controller-service-account",
        "name": "ca-controller-service-account",
        "parent": "ns-cyberarmor-system"
      },
      "position": {
        "x": 438.46453693215335,
        "y": -215.1966313276638
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": "ServiceAccount"
    },
    {
      "data": {
        "id": "s:kube-proxy",
        "name": "kube-proxy",
        "parent": "ns-kube-system"
      },
      "position": {
        "x": -69.38757069884704,
        "y": 313.4419346046243
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": "ServiceAccount"
    },
    {
      "data": {
        "id": "s:coredns",
        "name": "coredns",
        "parent": "ns-kube-system"
      },
      "position": {
        "x": -61.48647869380369,
        "y": -65.88253910558853
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": "ServiceAccount"
    },
    {
      "data": {
        "source": "s:ca-controller-service-account",
        "target": "cr:ca-controller-roles",
        "name": "ca-controller-role-binding",
        "color": "#00ffff",
        "id": "a49d1c06-aaae-4a4e-a44b-ae3810c2cd7f"
      },
      "position": {
        "x": null,
        "y": null
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": "clusterRoleBinding"
    },
    {
      "data": {
        "source": "s:kube-proxy",
        "target": "cr:system:node-proxier",
        "name": "kubeadm:node-proxier",
        "color": "#00ffff",
        "id": "9d2625b6-e040-4ad3-a4a5-fd20454a399a"
      },
      "position": {
        "x": null,
        "y": null
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": "clusterRoleBinding"
    },
    {
      "data": {
        "source": "s:coredns",
        "target": "cr:system:coredns",
        "name": "system:coredns",
        "color": "#00ffff",
        "id": "be18bd71-1477-4802-93c0-8b5039ec1451"
      },
      "position": {
        "x": null,
        "y": null
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": "clusterRoleBinding"
    },
    {
      "data": {
        "id": "wlid://cluster-haganenorenkinjitsu/namespace-cyberarmor-system/deployment-ca-posture",
        "name": "ca-posture",
        "img": "assets/images/kubernetesNormal.svg",
        "parent": "ns-cyberarmor-system",
        "kind": "microservice",
        "isCAAttached": false,
        "caIntegrityStatus": 0,
        "coverstyle": "cover",
        "isExternalFacingMS": false,
        "isPrivileged": false,
        "zindex": 100
      },
      "position": {
        "x": 400.08693801381406,
        "y": -79.6072469158106
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "id": "wlid://cluster-haganenorenkinjitsu/namespace-cyberarmor-system/deployment-ca-ocimage",
        "name": "ca-ocimage",
        "img": "assets/images/kubernetesNormal.svg",
        "parent": "ns-cyberarmor-system",
        "kind": "microservice",
        "isCAAttached": false,
        "caIntegrityStatus": 0,
        "coverstyle": "cover",
        "isExternalFacingMS": false,
        "isPrivileged": false,
        "zindex": 100
      },
      "position": {
        "x": 503.3223476994333,
        "y": -83.59007432412747
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "id": "wlid://cluster-haganenorenkinjitsu/namespace-cyberarmor-system/deployment-ca-rbac",
        "name": "ca-rbac",
        "img": "assets/images/kubernetesNormal.svg",
        "parent": "ns-cyberarmor-system",
        "kind": "microservice",
        "isCAAttached": false,
        "caIntegrityStatus": 0,
        "coverstyle": "cover",
        "isExternalFacingMS": false,
        "isPrivileged": false,
        "zindex": 100
      },
      "position": {
        "x": 293.0795318741302,
        "y": -121.0612156870213
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "id": "wlid://cluster-haganenorenkinjitsu/namespace-cyberarmor-system/deployment-ca-dashboard-aggregator",
        "name": "ca-dashboard-aggregator",
        "img": "assets/images/kubernetesNormal.svg",
        "parent": "ns-cyberarmor-system",
        "kind": "microservice",
        "isCAAttached": false,
        "caIntegrityStatus": 0,
        "coverstyle": "cover",
        "isExternalFacingMS": false,
        "isPrivileged": false,
        "zindex": 100
      },
      "position": {
        "x": 623.067937732643,
        "y": -152.9943949131108
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "id": "wlid://cluster-haganenorenkinjitsu/namespace-cyberarmor-system/deployment-ca-vuln-scan",
        "name": "ca-vuln-scan",
        "img": "assets/images/kubernetesNormal.svg",
        "parent": "ns-cyberarmor-system",
        "kind": "microservice",
        "isCAAttached": false,
        "caIntegrityStatus": 0,
        "coverstyle": "cover",
        "isExternalFacingMS": false,
        "isPrivileged": false,
        "zindex": 100
      },
      "position": {
        "x": 578.8708223815897,
        "y": -255.36722757566304
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "id": "wlid://cluster-haganenorenkinjitsu/namespace-cyberarmor-system/deployment-ca-websocket",
        "name": "ca-websocket",
        "img": "assets/images/kubernetesNormal.svg",
        "parent": "ns-cyberarmor-system",
        "kind": "microservice",
        "isCAAttached": false,
        "caIntegrityStatus": 0,
        "coverstyle": "cover",
        "isExternalFacingMS": false,
        "isPrivileged": false,
        "zindex": 100
      },
      "position": {
        "x": 533.3556173259253,
        "y": -356.0341828455147
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "id": "wlid://cluster-haganenorenkinjitsu/namespace-cyberarmor-system/deployment-ca-oracle",
        "name": "ca-oracle",
        "img": "assets/images/kubernetesNormal.svg",
        "parent": "ns-cyberarmor-system",
        "kind": "microservice",
        "isCAAttached": false,
        "caIntegrityStatus": 0,
        "coverstyle": "cover",
        "isExternalFacingMS": false,
        "isPrivileged": false,
        "zindex": 100
      },
      "position": {
        "x": 415.83337947677455,
        "y": -349.61016945244194
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "id": "wlid://cluster-haganenorenkinjitsu/namespace-kube-system/deployment-coredns",
        "name": "coredns",
        "img": "assets/images/kubernetesNormal.svg",
        "parent": "ns-kube-system",
        "kind": "microservice",
        "isCAAttached": false,
        "caIntegrityStatus": 0,
        "coverstyle": "cover",
        "isExternalFacingMS": false,
        "isPrivileged": false,
        "zindex": 100
      },
      "position": {
        "x": -42.07300344489306,
        "y": -200.0675362081862
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "id": "wlid://cluster-haganenorenkinjitsu/namespace-kube-system/daemonset-kube-proxy",
        "name": "kube-proxy",
        "img": "assets/images/kubernetesNormal.svg",
        "parent": "ns-kube-system",
        "kind": "microservice",
        "isCAAttached": false,
        "caIntegrityStatus": 0,
        "coverstyle": "cover",
        "isExternalFacingMS": false,
        "isPrivileged": true,
        "zindex": 100
      },
      "position": {
        "x": -200.28239576237826,
        "y": 309.8606702358462
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "source": "wlid://cluster-haganenorenkinjitsu/namespace-cyberarmor-system/deployment-ca-posture",
        "target": "s:ca-controller-service-account",
        "name": "",
        "color": "#00ffff",
        "id": "fc80acbc-6fe2-47b3-af24-293f73a65d6c"
      },
      "position": {
        "x": null,
        "y": null
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "source": "wlid://cluster-haganenorenkinjitsu/namespace-cyberarmor-system/deployment-ca-ocimage",
        "target": "s:ca-controller-service-account",
        "name": "",
        "color": "#00ffff",
        "id": "57dd7b15-fbdb-4823-bdc3-d4cfaa90ce2b"
      },
      "position": {
        "x": null,
        "y": null
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "source": "wlid://cluster-haganenorenkinjitsu/namespace-cyberarmor-system/deployment-ca-rbac",
        "target": "s:ca-controller-service-account",
        "name": "",
        "color": "#00ffff",
        "id": "dd56d915-4e9a-49cd-9b7b-5b35bee362ec"
      },
      "position": {
        "x": null,
        "y": null
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "source": "wlid://cluster-haganenorenkinjitsu/namespace-cyberarmor-system/deployment-ca-dashboard-aggregator",
        "target": "s:ca-controller-service-account",
        "name": "",
        "color": "#00ffff",
        "id": "529216a9-98fa-480e-a563-5a2650449df8"
      },
      "position": {
        "x": null,
        "y": null
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "source": "wlid://cluster-haganenorenkinjitsu/namespace-cyberarmor-system/deployment-ca-vuln-scan",
        "target": "s:ca-controller-service-account",
        "name": "",
        "color": "#00ffff",
        "id": "1995945d-39cf-4936-a2cd-085d8c3473ff"
      },
      "position": {
        "x": null,
        "y": null
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "source": "wlid://cluster-haganenorenkinjitsu/namespace-cyberarmor-system/deployment-ca-websocket",
        "target": "s:ca-controller-service-account",
        "name": "",
        "color": "#00ffff",
        "id": "e3c0c12e-86a2-48e9-b8ec-8147f532377b"
      },
      "position": {
        "x": null,
        "y": null
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "source": "wlid://cluster-haganenorenkinjitsu/namespace-cyberarmor-system/deployment-ca-oracle",
        "target": "s:ca-controller-service-account",
        "name": "",
        "color": "#00ffff",
        "id": "266f0922-55a0-41b1-aaa3-7dbd840f1aab"
      },
      "position": {
        "x": null,
        "y": null
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "source": "wlid://cluster-haganenorenkinjitsu/namespace-kube-system/deployment-coredns",
        "target": "s:coredns",
        "name": "",
        "color": "#00ffff",
        "id": "087f3aff-dd83-4e1b-a7de-fd14c478e3a6"
      },
      "position": {
        "x": null,
        "y": null
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "source": "wlid://cluster-haganenorenkinjitsu/namespace-kube-system/daemonset-kube-proxy",
        "target": "s:kube-proxy",
        "name": "",
        "color": "#00ffff",
        "id": "94aee870-e542-466b-9fec-44f7231353dd"
      },
      "position": {
        "x": null,
        "y": null
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    }
  ]
  // --------------- PUT GRAPH ELEMENTS AS JSON ABOVE ---------------

  const layoutOptions = {
    "name": "fcose",
    "randomize": true,
    "animate": true,
    "fit": true,
    "nodeDimensionsIncludeLabels": true,
    "tilingPaddingVertical": 20,
    "tilingPaddingHorizontal": 20,
    "animationDuration": 500,
    "relativePlacementConstraint": null,
    "alignmentConstraint": {
      "horizontal": [
        [
          "wlid://cluster-haganenorenkinjitsu/namespace-cyberarmor-system/deployment-ca-posture",
          "wlid://cluster-haganenorenkinjitsu/namespace-cyberarmor-system/deployment-ca-ocimage",
          "wlid://cluster-haganenorenkinjitsu/namespace-cyberarmor-system/deployment-ca-rbac",
          "wlid://cluster-haganenorenkinjitsu/namespace-cyberarmor-system/deployment-ca-dashboard-aggregator",
          "wlid://cluster-haganenorenkinjitsu/namespace-cyberarmor-system/deployment-ca-vuln-scan",
          "wlid://cluster-haganenorenkinjitsu/namespace-cyberarmor-system/deployment-ca-websocket",
          "wlid://cluster-haganenorenkinjitsu/namespace-cyberarmor-system/deployment-ca-oracle",
          "wlid://cluster-haganenorenkinjitsu/namespace-kube-system/deployment-coredns",
          "wlid://cluster-haganenorenkinjitsu/namespace-kube-system/daemonset-kube-proxy"
        ],
        [
          "s:ca-controller-service-account",
          "s:kube-proxy",
          "s:coredns"
        ],
        [
          "cr:ca-controller-roles",
          "cr:system:coredns",
          "cr:system:node-proxier"
        ],
        [
          "rsc:pods",
          "rsc:endpoints",
          "rsc:services",
          "rsc:events",
          "rsc:namespaces",
          "rsc:*",
          "rsc:nodes",
          "rsc:endpointslices"
        ]
      ]
    }
  };

  const cy = cytoscape({
    container: document.getElementById('cy'),

    elements: elems,

    layout: {
      name: 'fcose',
    }
  }); // cy init

  let options = {
    highlightStyles: [],
    setVisibilityOnHide: false, // whether to set visibility on hide/show
    setDisplayOnHide: true, // whether to set display on hide/show
    zoomAnimationDuration: 500, //default duration for zoom animation speed
    neighbor: function (node) { // return desired neighbors of tapheld node
      return false;
    },
    neighborSelectTime: 500, //ms, time to taphold to select desired neighbors,
    colorCount: 3,
    htmlElem4marqueeZoom: '#cy',
    marqueeZoomCursor: '/assets/images/zoom-cursor.svg',
    isShowEdgesBetweenVisibleNodes: false
  };
  const viewUtils = cy.viewUtilities(options);

  // show only some elements
  viewUtils.hide(cy.$());
  for (let i = 0; i < shownElems.length; i++) {
    viewUtils.show(cy.$id(shownElems[i].data.id));
  }

  window.cy = cy;
  document.getElementById('btn0').addEventListener('click', function () {
    console.log('button clicked');
    const elems4layout = cy.elements().not(':hidden, :transparent')
    elems4layout.layout(layoutOptions).run();
  });

}); // on dom ready